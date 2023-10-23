import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart({data, width, height}) {

    const svgRef = useRef();
    const xMetric = 'pis'
    const yMetric = 'users'
    const cDimension = 'device'

    useEffect(() => {
      // D3.js code for creating a scatter plot
        const svg = d3.select(svgRef.current);

        // Add X axis

        // .range([vis.config.margin.top, vis.config.height - vis.config.margin.bottom])
        // .domain(d3.range(vis.config.rowsN));
        console.log(data)

        var x = d3.scaleLinear()
          .domain([0, d3.max(data, d => d[xMetric])])
          .range([ 0, width ]);
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
          
          // console.log(d3.max(data, d => d[xMetric]))
           
        // Add Y axis
        var y = d3.scaleLinear()
          .domain([d3.max(data, d => d[yMetric]), 0])
          .range([ height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      
        // // Add a scale for bubble size
        // var z = d3.scaleLinear()
        //   .domain([200000, 1310000000])
        //   .range([ 4, 40]);
      
        // // Add a scale for bubble color
        // var myColor = d3.scaleOrdinal()
        //   .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
        //   .range(d3.schemeSet2);

        svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d[xMetric]))
        // .attr('cy', (d) => (d[1]))
        .attr('cy', (d) => y(d[yMetric]))
        .attr('r',2 )
        .attr('fill', 'blue');
    }, [data, width, height]);
  
    return (
      <div className="scatter-plot">
        <svg ref={svgRef} width={width} height={height}></svg>
      </div>
    );

}