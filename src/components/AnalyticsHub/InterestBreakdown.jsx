// InterestBreakdown.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const InterestBreakdown = ({ data }) => {
  const svgRef = useRef();
  const [activeSlice, setActiveSlice] = useState(null);

  useEffect(() => {
    const width = 800;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 40;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 3},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.count)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(radius * 0.4)
      .outerRadius(radius * 0.8);

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.interest))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
      .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).transition()
          .duration(200)
          .attr("d", d3.arc().innerRadius(radius * 0.4).outerRadius(radius * 0.85))
          .style("opacity", 1);
        setActiveSlice(d.data);
      })
      .on("mouseout", (event) => {
        d3.select(event.currentTarget).transition()
          .duration(200)
          .attr("d", arc)
          .style("opacity", 0.7);
        setActiveSlice(null);
      });

    const label = svg.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('dy', '.35em')
      .text(d => d.data.interest)
      .attr('transform', d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? 'start' : 'end';
      });

    const polyline = svg.selectAll('polyline')
      .data(pie(data))
      .enter()
      .append('polyline')
      .attr('points', d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      })
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1px');

    // Legend
    const legend = svg.selectAll('.legend')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(${width / 2 - 100},${-height / 2 + i * 20})`);

    legend.append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', d => color(d.interest))
      .style('opacity', 0.7);

    legend.append('text')
      .attr('x', 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .text(d => `${d.interest} (${d.generation})`);

  }, [data]);

  return (
    <div style={{ position: 'relative' }}>
      <svg ref={svgRef}></svg>
      {activeSlice && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}>
          <h3>{activeSlice.interest}</h3>
          <p>Count: {activeSlice.count}</p>
          <p>Generation: {activeSlice.generation}</p>
        </div>
      )}
    </div>
  );
};

export default InterestBreakdown;