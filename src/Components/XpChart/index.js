import React from "react";
import { chartStats } from "../../Configs";
import { Radar } from "react-chartjs-2";

const XpChart = () => (
  <div className='chart'>
    <Radar
      data={chartStats}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        scale: {
          angleLines: {
            display: true
          },
          ticks: {
            suggestedMin: 30,
            suggestedMax: 100
          }
        }
      }}
    />
  </div>
);

export default XpChart;
