import logo from './logo.svg';
import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Button />} />
        <Route path = "/Landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
