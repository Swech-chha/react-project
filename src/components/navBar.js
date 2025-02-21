
import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NAMASTE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Destination
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Destination Detail
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Elements
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
// import React from 'react';
// import './HomePage.css'; // Import the CSS

// const HomePage = () => {
//   return (
//     <div className="hero">
//       <div className="overlay"></div>
//       <div className="content">
//         <h1>Unstoppable.</h1>
//         <p>Subtitle or tagline goes here</p>
//       </div>
//       <nav className="navigation">
//         <ul>
//           <li>About</li>
//           <li>Services</li>
//           <li>Mission</li>
//           <li className="contact">Contact</li>
//         </ul>
//       </nav>
//       <div className="social-icons">
//         <a href="#">Facebook</a>
//         <a href="#">Instagram</a>
//         <a href="#">Twitter</a>
//       </div>
//       <div className="scroll">
//         <span>Scroll Down</span>
//       </div>
//     </div>
//   );
// };

// export default HomePage;