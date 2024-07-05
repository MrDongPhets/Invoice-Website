
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Invoice" element={<Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
