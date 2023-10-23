import { useRef, useEffect, useState } from 'react';
import { csv } from 'd3';
import Chart from './Chart';

const row = d => {
  return {
    // Metrics
    users: +d.users,
    sessions: +d.sessions,
    pis: +d.pis,
    accPis: +d.accPis,
    greenLcpPis: +d.greenLcpPis,
    yellowLcpPis: +d.yellowLcpPis,
    redLcpPis: +d.redLcpPis, 
    addToCartEvents: +d.addToCartEvents,
    conversions: +d.conversions,

    // Dimensions
    testGroup: d.testGroup,
    device: d.device,
    screenHeight: +d.screenHeight,
    screenWidth: +d.screenWidth,
    operatingSystem: d.operatingSystem,
    osGrouped: d.osGrouped, 
    browser: d.browser,
    browserGrouped: d.browserGrouped,
    browserVersion: d.browserVersion, 
    userAgentClass: d.userAgentClass,
  }

}

export default function Explorer() {

    const [data, setData] = useState([]);

    // Read data
    useEffect(() => {
      csv('/data/input_data.csv', row).then((csvData) => {
        csvData = csvData.slice(0, 5000)
        setData(csvData);
      });
    }, []);
      
    return (
      <div>
          <h2>UX Environment Map</h2>
          <Chart data={data} width={600} height={400} />

      </div>
    );

}

// , (d) => {
//   return {
//     // Dimensions
//     testGroup: d.testGroup,
//     device: d.device,
//     screenHeight: +d.screenHeight,
//     screenWidth: +d.screenWidth,
//     operatingSystem: d.operatingSystem,
//     osGrouped: d.osGrouped, 
//     browser: d.browser,
//     browserGrouped: d.browserGrouped,
//     browserVersion: d.browserVersion, 
//     userAgentClass: d.userAgentClass,

//     // Metrics
//     users: +d.users,
//     sessions: +d.sessions,
//     pis: +d.pis,
//     accPis: +d.accPis,
//     greenLcpPis: +d.greenLcpPis,
//     yellowLcpPis: +d.yellowLcpPis,
//     redLcpPis: +d.redLcpPis, 
//     addToCartEvents: +d.addToCartEvents,
//     conversions: +d.conversions
    
//   }
// }