import React, { useEffect } from "react";
import Typed from "typed.js";
import "../styles/body.scss";

export default function Body() {
  useEffect(() => {
    const options = {
      strings: ["Web Design", "Social skills", "Marketing", "Programming"],
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed("#typed-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container my-5 p-5">
      <h1 className="headers align-items-center my-3 text-center text-white">
        Learn the fundamentals with our Experts in <br />
        <span className="loop" id="typed-element"></span>
      </h1>
      <h2 className="header2 text-center text-white">
        Utilize effective training to reach your potential!
      </h2>
      <br />
      <br />
      <div className="main">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <br />
      <div className="subheaders d-flex justify-content-center text-white">
        <h2>
          Explore our more useful products
          <i className="fa-regular bg-transparent fa-heart"></i>
        </h2>
      </div>
      <div className="logos mx-auto d-flex justify-content-center text-white">
        <h1 className="h1 mx-3">EZIBLOGS</h1>
        <h1 className="h1 mx-3">EZIPOS</h1>
        <h1 className="h1 mx-3">EZICODING</h1>
      </div>
    </div>
  );
}
