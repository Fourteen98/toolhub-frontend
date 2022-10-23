import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // eslint-disable-line
import MetricsData from "../MetricsData"; // eslint-disable-line

const Metrics = () => {
  const [metricsData] = useState({
    labels: MetricsData.map((data) => data.title),
    datasets: [{
      label: 'percentage of tools with missing information compared with the total number of tools in the records',
      data: MetricsData.map((data) => data.total),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 2,
    }],
  });
  return (
    <>
      <Pie data={metricsData} />
    </>
  );
};

export default Metrics;
