import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const LocationHeatmap = ({ data }) => {
  const svgRef = useRef();
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Reduce the width and height
    const width = 800;
    const height = 400;
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("position", "absolute")
      .style("left", 0)
      .style("bottom", 0);

    // Adjust the scale of the projection
    const projection = d3.geoNaturalEarth1()
  .scale(width / 2.1 / Math.PI)
  .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const generations = [...new Set(data.map(d => d.generation))];
    const colors = d3.scaleOrdinal(d3.schemeCategory10).domain(generations);
    
    // Decrease the range of the radius scale
    const radiusScale = d3.scaleSqrt()
      .domain([0, d3.max(data, d => d.count)])
      .range([2, 12]);

    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

    svg.call(zoom);

    function zoomed(event) {
      svg.selectAll('g.map-group, g.points-group').attr('transform', event.transform);
    }

    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "#333")
      .style("color", "#fff")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("font-size", "12px")
      .style("pointer-events", "none");

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(world => {
      const mapGroup = svg.append("g").attr("class", "map-group");

      mapGroup.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#e0e0e0")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5);

      mapGroup.append("path")
        .datum(topojson.feature(world, world.objects.land))
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);

      const pointsGroup = svg.append("g").attr("class", "points-group");

      pointsGroup.selectAll(".location")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "location")
        .attr("cx", d => projection([d.longitude, d.latitude])[0])
        .attr("cy", d => projection([d.longitude, d.latitude])[1])
        .attr("r", 0)
        .attr("fill", d => colors(d.generation))
        .attr("opacity", 0.7)
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5)
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("r", radiusScale(d.count) * 1.2);

          tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);
          tooltip.html(`Location: ${d.location}<br/>Count: ${d.count}<br/>Generation: ${d.generation}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("r", radiusScale(d.count));

          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        })
        .on("click", (event, d) => {
          setSelectedLocation(d);
        })
        .transition()
        .duration(1000)
        .ease(d3.easeBounceOut)
        .attr("r", d => radiusScale(d.count));

      // Adjust legend position and size
      const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - 120}, ${height - 80})`);

      legend.selectAll("rect")
        .data(generations)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", (d, i) => i * 20)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", d => colors(d));

      legend.selectAll("text")
        .data(generations)
        .enter()
        .append("text")
        .attr("x", 20)
        .attr("y", (d, i) => i * 20 + 12)
        .text(d => d)
        .attr("font-size", "10px")
        .attr("alignment-baseline", "middle");

      svg.append("text")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("Global Location Distribution");
    }).catch(error => {
      console.error("Error loading the world map data:", error);
    });

  }, [data]);

  return (
    <div style={{ position: 'relative', height: '400px', width: '1200px' }}>
      <svg ref={svgRef}></svg>
      {selectedLocation && (
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 10 }}>
          <h3 style={{ margin: 0, color: '#333', fontSize: '14px' }}>Selected Location: <span style={{ color: '#007bff' }}>{selectedLocation.location}</span></h3>
          <p style={{ margin: '5px 0', color: '#555', fontSize: '12px' }}>Count: {selectedLocation.count}</p>
          <p style={{ margin: '5px 0', color: '#555', fontSize: '12px' }}>Generation: {selectedLocation.generation}</p>
        </div>
      )}
    </div>
  );
};

export default LocationHeatmap;