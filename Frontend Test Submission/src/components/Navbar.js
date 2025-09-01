import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
