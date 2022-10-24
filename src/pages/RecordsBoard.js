import React from 'react';
import Metrics from './components/Metrics';

const RecordsBoard = () => (
  <div className="records--board">
    <div className="main--container">
      <h1>Records Dashboard</h1>
      <div className="card--container">
        <div className="card">
          <div className="face1 face">
            <div className="content">
              <span className="starts">
                <p className="description">The Total Number Of Missing Tools.</p>
              </span>
            </div>
          </div>
          <div className="face face2">
            <h2>1789</h2>
          </div>
        </div>

        <div className="card">
          <div className="face1 face">
            <div className="content">
              <span className="starts">
                <p className="description">Total Number Of Tools With Missing Information</p>
              </span>
            </div>
          </div>
          <div className="face face2">
            <h2>939</h2>
          </div>
        </div>

        <div className="card">
          <div className="face1 face">
            <div className="content">
              <span className="starts">
                <p className="description">Number Of Tools Edited Using This Record Management Tool</p>
              </span>
            </div>
          </div>
          <div className="face face2">
            <h2>89</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="pie--chart">
      <Metrics />
    </div>
  </div>
);

export default RecordsBoard;
