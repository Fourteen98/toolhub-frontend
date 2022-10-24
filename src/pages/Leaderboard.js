import React, { useState, useEffect } from 'react'; // eslint-disable-line
import LeaderboardData from '../data/LeaderboardData';

const Leaderboard = () => {
  const [leaderboardData] = useState(
    LeaderboardData.sort((a, b) => b.tools - a.tools),
  );
  const renderLeaderboard = (leaderboardData.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.tools}</td>
    </tr>
  )));

  return (
    <div className="leaderboard--container">
      <div className="leaderboard--header">
        <h1>Tools Hub Leaderboard</h1>
      </div>
      <div className="leaderboard--table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th># Tools</th>
            </tr>
          </thead>
          <tbody>
            {renderLeaderboard}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Top editors in the last 30 days</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
