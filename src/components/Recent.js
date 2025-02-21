import React, { Component } from "react";
import "../App.css"; // Ensure App.css is imported

class Recent extends Component {
  state = {};
  render() {
    return (
      <section className="recent-trips py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Recent Trips</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card border-0">
                <img
                  src="https://www.thirdrockadventures.com/assets-back/images/news/badimalika.jpgRcV.jpg"
                  className="card-img-top rounded-3 img-fluid"
                  alt="Destination 1"
                />
                <div className="card-body text-center">
                  <p className="text-muted small mb-1">25km (15.5 miles); 3 days; medium</p>
                  <h5 className="fw-bold">Badimalika Municipality (Nepali: बडिमालिका नगरपालिका) </h5>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card border-0">
                <img
                  src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLSi-_pCB6_BKrfgIuYbboTYUf-7AG7H1ZT77ETLiSgEm4R4j8LVyS4E2D1x8puEzcBL9wVFzkW1m1g3NIiArn6odjVqYkBqNiHmUieQ"
                  className="card-img-top rounded-3 img-fluid"
                  alt="Destination 2"
                />
                <div className="card-body text-center">
                  <p className="text-muted small mb-1">106 km²; 3 days; hard</p>
                  <h5 className="fw-bold">Rara Lake,located in Jumla and Mugu Districts of Karnali Province.</h5>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card border-0">
                <img
                  src="https://lp-cms-production.imgix.net/2024-08/GettyRF487452110.jpg?fit=crop&w=1280&auto=format&q=75"
                  className="card-img-top rounded-3 img-fluid"
                  alt="Destination 3"
                />
                <div className="card-body text-center">
                  <p className="text-muted small mb-1">25km (15.5 miles); 3 days; easy</p>
                  <h5 className="fw-bold">Ghandruk Loop
                  Nepal's best short trek</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recent;
