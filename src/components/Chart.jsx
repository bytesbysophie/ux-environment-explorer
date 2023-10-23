import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart({data, width, height}) {

    const svgRef = useRef();
    const xMetric = 'pis'
    const yMetric = 'sessions'
    const zMetric = 'users'
    const cDimension = 'browser'
    const maxRadius = 30

    useEffect(() => {
      // D3.js code for creating a scatter plot
      const svg = d3.select(svgRef.current);

      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[xMetric])])
        .range([ 0, width ]);
                    
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[yMetric])])
        .range([ height, 0]);

      // Add a scale for bubble size
      var z = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[zMetric])])
        .range([0, maxRadius]);

      // Add a scale for bubble color
      var c = d3.scaleOrdinal()
        .domain(d3.map(data, d => d[cDimension]))
        .range(d3.schemeSet2);

      svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d[xMetric]))
      .attr('cy', (d) => y(d[yMetric]))
      .attr('fill', (d) => c(d[cDimension]))
      .attr('r', (d) => z(d[zMetric]));
    }, [data, width, height]);
  
    return (
      <div className="scatter-plot">
        <svg ref={svgRef} width={width} height={height}></svg>
      </div>
    );

}