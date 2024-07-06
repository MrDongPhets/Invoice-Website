
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import Costumer from './pages/Costumer';
import Product from "./pages/Product";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Costumer" element={<Costumer />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
