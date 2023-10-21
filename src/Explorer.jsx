import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Explorer() {

    const svgRef = useRef();

    useEffect(() => {
      // D3.js code for creating a scatter plot
      const svg = d3.select(svgRef.current);

    const data = [
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
        [Math.random() * 100, Math.random() * 100],
    ];

    svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => d[0])
        .attr('cy', (d) => d[1])
        .attr('r', 5)
        .attr('fill', 'blue');
    }, []);
  
    return (
      <div className="scatter-plot">
        <svg ref={svgRef}></svg>
      </div>
    );

}