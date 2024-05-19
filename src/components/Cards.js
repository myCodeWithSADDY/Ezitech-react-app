import React from "react";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

function Cards() {
  return (
    <div>
      <div className="container">
        <div className="container text-center my-2">
          <h1>Perfect Internships for you</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={card1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Html/Css Coding</h5>
                <div className="card-info">
                  <p className="card-text">
                    <i className="fa-solid fa-user my-2"></i> Employment -
                    Hybrid
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i> Location -
                    Rawalpindi
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-suitcase"></i> Job Type - Part
                    Time/Full Time
                  </p>
                  <button type="button" className="btn btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={card2} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Graphic Designing</h5>
                <div className="card-info">
                  <p className="card-text">
                    <i className="fa-solid fa-user my-2"></i> Employment -
                    Hybrid
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i> Location -
                    Rawalpindi
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-suitcase"></i> Job Type - Part
                    Time/Full Time
                  </p>
                  <button type="button" className="btn btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={card3} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Marketing</h5>
                <div className="card-info">
                  <p className="card-text">
                    <i className="fa-solid fa-user my-2"></i> Employment -
                    Hybrid
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot"></i> Location -
                    Rawalpindi
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-suitcase"></i> Job Type - Part
                    Time/Full Time
                  </p>
                  <button type="button" className="btn btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
