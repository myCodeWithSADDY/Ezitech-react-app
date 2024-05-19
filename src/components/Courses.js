import React from "react";
import img1 from "../images/flutter.jpg";
import img2 from '../images/Ai.webp'
import img3 from '../images/online.webp'
import img4 from '../images/frontend.webp'
import '../styles/courses.scss'


function Courses() {
  return (
    <div>
      <h1 className="text-center">Recommanded Courses</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="card mb-4">
              <img src={img1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Title 1</h5>
                <p>
                  <i className="fas fa-clock"></i> 15 mins
                </p>
                <p>Views: 100</p>
                <p>Reviews: 50</p>
                <p>Price: $10</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card mb-4">
              <img src={img2} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Title 1</h5>
                <p>
                  <i className="fas fa-clock"></i> 15 mins
                </p>
                <p>Views: 100</p>
                <p>Reviews: 50</p>
                <p>Price: $10</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card mb-4">
              <img src={img3} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Title 1</h5>
                <p>
                  <i className="fas fa-clock"></i> 15 mins
                </p>
                <p>Views: 100</p>
                <p>Reviews: 50</p>
                <p>Price: $10</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="card mb-4">
              <img src={img4} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Title 1</h5>
                <p>
                  <i className="fas fa-clock"></i> 15 mins
                </p>
                <p>Views: 100</p>
                <p>Reviews: 50</p>
                <p>Price: $10</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
