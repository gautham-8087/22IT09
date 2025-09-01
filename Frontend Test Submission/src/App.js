import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
