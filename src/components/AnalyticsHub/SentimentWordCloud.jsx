import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const SentimentWordCloud = ({ data }) => {
  const svgRef = useRef();
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    // Clear existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const layout = cloud()
      .size([width, height])
      .words(data.map(d => ({ text: d.word, size: d.size, sentiment: d.sentiment })))
      .padding(5)
      .rotate(() => Math.random() > 0.5 ? 0 : 90)
      .font("Impact")
      .fontSize(d => d.size)
      .on("end", draw);

    layout.start();

    function draw(words) {
      const group = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const colorScale = d3.scaleLinear()
        .domain([-1, 0, 1])
        .range(["#ff4136", "#ffdc00", "#2ecc40"]);

      const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px");

      group.selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", "1px")
        .style("font-family", "Impact")
        .style("fill", d => colorScale(d.sentiment))
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text(d => d.text)
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .style("font-size", d.size * 1.2 + "px")
            .attr("font-weight", "bold");

          tooltip.transition()
            .duration(200)
            .style("opacity", .9);
          tooltip.html(`Word: ${d.text}<br/>Size: ${d.size}<br/>Sentiment: ${d.sentiment !== undefined ? d.sentiment.toFixed(2) : 'N/A'}`)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .style("font-size", d.size + "px")
            .attr("font-weight", "normal");

          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        })
        .on("click", (event, d) => {
          setSelectedWord(d);
        })
        .transition()
        .duration(600)
        .ease(d3.easeCubicOut)
        .style("font-size", d => d.size + "px")
        .attr("opacity", 1);
    }
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      {selectedWord && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Selected Word: {selectedWord.text}</h3>
          <p>Size: {selectedWord.size}</p>
          <p>Sentiment: {selectedWord.sentiment !== undefined ? selectedWord.sentiment.toFixed(2) : 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentWordCloud;
