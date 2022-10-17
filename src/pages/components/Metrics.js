import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // eslint-disable-line

const Metrics = ({ chartsData }) => (
  <>
    <Pie data={chartsData} />
  </>
);

export default Metrics;
