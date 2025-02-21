import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <h3 className="mb-3">Where you want to go?</h3>
        <div className="row justify-content-center">
          {/* Input field */}
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Where to go?"
            />
          </div>
          {/* Dropdown for Date */}
          <div className="col-md-2">
            <select className="form-select">
              <option>Date</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Next Week</option>
            </select>
          </div>
          {/* Dropdown for Travel Type */}
          <div className="col-md-2">
            <select className="form-select">
              <option>Travel type</option>
              <option>Solo</option>
              <option>Family</option>
              <option>Adventure</option>
            </select>
          </div>
          {/* Search Button */}
          <div className="col-md-2">
            <button className="btn btn-danger w-100">Search</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
