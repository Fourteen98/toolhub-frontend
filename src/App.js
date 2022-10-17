import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import RecordsBoard from './pages/RecordsBoard';
import Navbar from './pages/components/Navbar';
import ToolsData from './pages/Data';

function App() {
  const [toolsData] = useState({
    labels: ToolsData.map((data) => data.title),
    datasets:
  [{
    label: 'percentage of tools with missing information compared with the total number of tools in the records',
    data: ToolsData.map((data) => data.total),
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
  console.log(toolsData);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home chartsData={toolsData} />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="recordsboard" element={<RecordsBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
