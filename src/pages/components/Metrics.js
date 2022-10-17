import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // eslint-disable-line

const Metrics = ({ chartsData }) => (
  <>
    <Bar data={chartsData} />
  </>
);

export default Metrics;
