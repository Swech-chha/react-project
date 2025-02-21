import React from 'react';
import '../App.css'; // Ensure App.css is imported

const Icons = () => {
  return (
    <div className="icons-container">
      <div className="section">
      <i className="bi bi-bus-front" style={{ fontSize: "75px" }}></i>

        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <h2>Comfortable Journey</h2>
        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
      </div>
      <div className="section">
      
      <i className="bi bi-house-fill" style={{ fontSize: "75px" }}></i>
        
        <h2>Luxuries Hotel</h2>
        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
      </div>
      <div className="section">
      <i className="bi bi-person" style={{ fontSize: "75px" }}></i>
        <h2>Travel Guide</h2>
        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
      </div>
    </div>
  );
};

export default Icons;
