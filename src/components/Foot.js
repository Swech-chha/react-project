import React from "react";
import "../App.css"; 
import namaaste from "../Images/file.png";

const Foot = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Section - Company Info */}
          <div className="col-md-3 d-flex flex-column align-items-center "style={{ padding: 20 }} >
            <img src={namaaste} alt="namaste"  style={{ width: '5vw', height: '10vh' }} />
            <h4><strong><em>Namaste</em></strong></h4> {/* Bigger text for emphasis */}
            
            <p className="small">5th Floor, Green Lane, Ithari-1782</p>
            <p className="small mb-1">+10 367 826 2567</p>
            <p className="small">contactSwechchhapoudel@gmail.com</p>
            
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/sweksha.poudel.1/map" className="text-light">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.facebook.com/sweksha.poudel.1/map" className="text-light">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-pinterest"></i> Pinterest
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>

          {/* Middle Section - Company Links */}
          <div className="col-md-3" style={{ padding: 20 }}>
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none small">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none small">About</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Gallery</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Contact</a></li>
            </ul>
          </div>

          {/* Middle Section - Popular Destinations */}
          <div className="col-md-3" style={{ padding: 20, }}>
            <h6 className="fw-bold">Popular Destination</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none small">Everest Base Camp</a></li>

              <li><a href="#" className="text-light text-decoration-none small">Rara</a></li>

              <li><a href="#" className="text-light text-decoration-none small">Tilicho</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Badimalika</a></li>
            </ul>
          </div>

          {/* Right Section - Instagram Gallery */}
          <div className="col-md-3 d-flex flex-column align-items-center" style={{ padding: 20 }}>
            <h6 className="fw-bold">Instagram</h6>
            <div className="row row-cols-2 g-2">
              <div className="col">
                <img src="https://travelnepal.com/wp-content/uploads/spotlight-insta/17954794328391993-m-90-600.jpg" className="rounded-3 img-fluid" alt="1" />
              </div>
              <div className="col">
                <img src="https://travelnepal.com/wp-content/uploads/spotlight-insta/17970890555120373-m-90-600.jpg" className="rounded-3 img-fluid" alt="2" />
              </div>
              <div className="col">
                <img src="https://travelnepal.com/wp-content/uploads/spotlight-insta/17952840824526892-m-90-600.jpg" className="rounded-3 img-fluid" alt="3" />
              </div>
              <div className="col">
                <img src="https://travelnepal.com/wp-content/uploads/spotlight-insta/17868822485893212-m-90-600.jpg" className="rounded-3 img-fluid" alt="4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center py-3 border-top border-secondary mt-4">
        <p className="small mb-0">
          Copyright ©2025 All rights reserved | This page is made with ❤️ by{" "}
          <span className="text-danger fw-bold">Swechchha Poudel</span> | <strong><em className="fs-5">Namaste</em></strong>
        </p>
      </div>
    </footer>
  );
};

export default Foot;