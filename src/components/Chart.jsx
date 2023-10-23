import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart({data}) {

    const svgRef = useRef();
    const metric1 = 'pis'
    const metric2 = 'accPis'

    useEffect(() => {
      // D3.js code for creating a scatter plot
        const svg = d3.select(svgRef.current);

        svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => d[0])
        .attr('cy', (d) => d[1])
        .attr('r', 5)
        .attr('fill', 'blue');
    }, [data]);
  
    return (
      <div className="scatter-plot">
        <svg ref={svgRef}></svg>
      </div>
    );

}