import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const AgeDistribution = ({ data }) => {
  const svgRef = useRef();
  const [selectedGeneration, setSelectedGeneration] = useState(null);

  useEffect(() => {
    const margin = { top: 40, right: 120, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.age))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
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
      .style("text-anchor", "end")
      .style("font-size", "12px");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("font-size", "12px");

    // Add X axis label
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .text("Age")
      .style("font-size", "14px");

    // Add Y axis label
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -height / 2)
      .text("Count")
      .style("font-size", "14px");

    // Add title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text("Age Distribution by Generation");

    // Add bars with rising effect
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.age))
      .attr("y", height)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", d => colorScale(d.generation))
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("opacity", d => selectedGeneration && d.generation !== selectedGeneration ? 0.3 : 1)
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.8)
          .attr("y", yScale(d.count) - 10)
          .attr("height", height - yScale(d.count) + 10);
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`Age: ${d.age}<br/>Count: ${d.count}<br/>Generation: ${d.generation}`)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", selectedGeneration && d.generation !== selectedGeneration ? 0.3 : 1)
          .attr("y", yScale(d.count))
          .attr("height", height - yScale(d.count));
        tooltip.transition().duration(500).style("opacity", 0);
      })
      .on("click", function(event, d) {
        setSelectedGeneration(prevGen => prevGen === d.generation ? null : d.generation);
      })
      .transition()
      .duration(1000)
      .attr("y", d => yScale(d.count))
      .attr("height", d => height - yScale(d.count));

    // Add value labels on top of bars
    svg.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => xScale(d.age) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.count) - 5)
      .attr("text-anchor", "middle")
      .text(d => d.count)
      .style("font-size", "12px")
      .style("fill", "#333")
      .style("opacity", 0)
      .transition()
      .delay(1000)
      .duration(500)
      .style("opacity", d => selectedGeneration && d.generation !== selectedGeneration ? 0.3 : 1);

    // Add legend
    const legend = svg.selectAll(".legend")
      .data(colorScale.domain())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${width + 10},${i * 25})`)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedGeneration(prevGen => prevGen === d ? null : d);
      });

    legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", colorScale)
      .style("opacity", d => selectedGeneration && d !== selectedGeneration ? 0.3 : 1);

    legend.append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(d => d)
      .style("font-size", "12px")
      .style("opacity", d => selectedGeneration && d !== selectedGeneration ? 0.3 : 1);

    // Add tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

  }, [data, selectedGeneration]);

  return <svg ref={svgRef}></svg>;
};

export default AgeDistribution;