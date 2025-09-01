import React from "react";
import "./../App.css";

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to React URL Shortener Web App</h1>
      <p>Here you can shorten your URL easily.</p>

      <div className="url-input-container">
        <label htmlFor="urlInput" className="url-label">
          Enter your URL:
        </label>
        <input
          id="input"
          type="text"
          placeholder="https://example.com"
          className="url-input"
        />
      </div>
    </div>
  );
};

export default Home;
