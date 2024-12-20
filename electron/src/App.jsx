import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";  // Use HashRouter for Electron
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Navbar from './components/navbar.jsx'; // Ensure 'Navbar' is capitalized
import Bolt from './pages/Bolt.jsx'; // Import Bolt.jsx
import ProductCatalog from './pages/productCatalog.jsx'; // Import ProductCatalog.jsx
import Login from './pages/login.jsx'; // Import Login.jsx

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen max-h-full bg-zinc-950 text-white">
        <Navbar /> {/* Navbar should be capitalized */}
        <div className="flex-grow ml-64"> {/* Add margin to accommodate the sidebar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bolt" element={<Bolt />} /> {/* Add Bolt route */}
            <Route path="/product-catalog" element={<ProductCatalog />} /> {/* Add ProductCatalog route */}
            <Route path="/login" element={<Login />} /> {/* Add Login route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}