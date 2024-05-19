import React from "react";
import Icons from "./icons";
import Icon2 from "./icon2";
import Icon3 from "./Icon3";

function Section() {
  return (
    <div className="container">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4">
          <Icons />
          <h3>Sign up</h3>
          <p>Enter your name, email, and contact details to get started. It truly is that simple!</p>
        </div>
        <div className="col-md-4 my-3">
          <Icon2 />
          <br />
          <h3>Select course</h3>
          <p>Browse our extensive and ever-expanding variety of courses for professional development.</p>
        </div>
        <div className="col-md-4 my-3">
          <Icon3 />
          <br />
          <h3>Start Learning</h3>
          <p>Do the tasks, and your teacher will evaluate them before providing you with thorough</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
export default Section;
