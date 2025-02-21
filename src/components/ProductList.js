import React from "react";
import img3 from "../Images/illam.png";
import img4 from "../Images/kathmandu.png";
import img5 from "../Images/mount.png";
import img6 from "../Images/mustang.png";


export default function ProductList() {
  return (
    <footer className="footer bg-light text-dark py-4">
      <div className="container text-center">
        <h2 className="mb-3">Popular Destinations</h2>
        <h5>“All journeys have secret destinations of which the traveler is unaware.”</h5>
        <div className="row justify-content-center">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={img6} className="card-img-top img-fixed" alt="Mount Everest" />
                <div className="card-body">
                  <h5 className="card-title">Mustang</h5>
                  <p className="card-text">Experience the breathtaking views of the world's highest peak.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={img3} className="card-img-top img-fixed" alt="Illam" />
                <div className="card-body">
                  <h5 className="card-title">Illam</h5>
                  <p className="card-text">Explore the lush tea gardens and serene landscapes of Illam.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={img4} className="card-img-top img-fixed" alt="Kathmandu" />
                <div className="card-body">
                  <h5 className="card-title">Kathmandu</h5>
                  <p className="card-text">Discover the rich history, culture, and ancient temples of Nepal’s capital.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={img5} className="card-img-top img-fixed" alt="Mount Everest" />
                <div className="card-body">
                  <h5 className="card-title">Mount Everest</h5>
                  <p className="card-text">A second chance to admire the world's most stunning peak.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
