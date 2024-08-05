// ProductViewsBarChart.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const ProductViewsBarChart = ({ data }) => {
  const svgRef = useRef();
  const [activeBar, setActiveBar] = useState(null);

  useEffect(() => {
    const margin = { top: 40, right: 20, bottom: 50, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Clear existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.productId))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.views) * 1.1])
      .range([height, 0]);

    const colorScale = d3.scaleOrdinal()
      .domain(["Boomers", "Millennials", "Gen Z", "Gen Alpha"])
      .range(["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"]);

    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(yScale));

    // Add X axis label
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 5)
      .text("Product ID");

    // Add Y axis label
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -height / 2)
      .text("Views");

    // Add bars
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.productId))
      .attr("y", height)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", d => colorScale(d.generation))
      .on("mouseover", (event, d) => {
        setActiveBar(d);
        d3.select(event.currentTarget)
          .transition()
          .duration(300)
          .attr("opacity", 0.8)
          .attr("y", yScale(d.views) - 10)
          .attr("height", height - yScale(d.views) + 10);
      })
      .on("mouseout", (event, d) => {
        setActiveBar(null);
        d3.select(event.currentTarget)
          .transition()
          .duration(300)
          .attr("opacity", 1)
          .attr("y", yScale(d.views))
          .attr("height", height - yScale(d.views));
      })
      .transition()
      .duration(1000)
      .attr("y", d => yScale(d.views))
      .attr("height", d => height - yScale(d.views));

    // Add labels on top of bars
    svg.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => xScale(d.productId) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.views) - 5)
      .attr("text-anchor", "middle")
      .text(d => d.views)
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);

    // Add title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Product Views by Generation");

  }, [data]);

  return (
    <div style={{ position: 'relative' }}>
      <svg ref={svgRef}></svg>
      {activeBar && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h3>Product {activeBar.productId}</h3>
          <p>Views: {activeBar.views}</p>
          <p>Generation: {activeBar.generation}</p>
        </div>
      )}
    </div>
  );
};

export default ProductViewsBarChart;