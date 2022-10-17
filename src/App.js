import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import RecordsBoard from './pages/RecordsBoard';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="recordsboard" element={<RecordsBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
