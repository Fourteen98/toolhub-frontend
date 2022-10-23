import React from 'react';

const Leaderboard = () => (
  <div className="leaderboard--container">
    <div className="leaderboard--header">
      <h1>Toolhub Leaderboard</h1>
      <p>This is the list of the top contributors in the last 30 days</p>
    </div>
    <div className="leaderboard--table">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Number of Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
          <tr>
            <td>4</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
          <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboard;
