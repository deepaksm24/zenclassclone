import React from "react";
import Top from "../top";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
];
function DashBoard() {
  return (
    <div>
      <Top pos="DashBoard" />
      <br />
      <br />
      <div className="classbox">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
          <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Mon', 'Tue', 'Wed'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
            
          </div>
          <ChartContainer
      series={series}
      width={500}
      height={400}
      xAxis={[
        {
          id: 'years',
          data: [2010, 2011, 2012, 2013, 2014],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Results" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
         
          
        </div>

        <div className="d-flex justify-content-start">
              
              
              
              <div className="card p-2 m-2">
    <h5 className="card-header">Webcode</h5>
    <div className="card-body">
      <h5 className="card-title">To be completed</h5>
      <p className="card-text">Complete</p>
    </div>
  </div>
                
          
                
                </div>
      </div>
    </div>
  );
}

export default DashBoard;
