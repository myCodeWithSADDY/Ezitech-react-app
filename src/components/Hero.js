import React from "react";
import image from "../images/hero.png";
import '../styles/hero.scss'
function Hero() {
  return (
    <div className="heading text-black text-center my-3">
      <h1>Best IT Services Award 2023</h1>

      <div className="container my-5 d-flex justify-content-center">
        <img src={image} alt="error" className="hero" />
        <p className="sub-container">
          <p
            className="text-left text-black text-start mx-5 "
            style={{ fontSize: "13px", fontFamily: "Montserrat" }}>
            <b>
              Ezitech Is affiliated With
              <a href="#" style={{ textDecoration: "none" }}>
                Eziline Software House
              </a>
            </b>
            . Eziline has been awarded the prestigious Best <br /> Software
            House in IT sector award by the President of Pakistan. This is an
            incredible achievement <br /> and a testament to the hard work and
            dedication of the entire team at Eziline Software House. The <br />
            award is a great recognition of the company's achievements in the
            field of IT and serves as a major <br /> milestone in its journey
            towards success. <br /> <br />
            This award is a huge source of motivation and inspiration for the
            entire team at Eziline Software <br /> House.{" "}
            <b>
              It is a validation of the company's commitment to innovation,
              excellence, and <br />
              customer satisfaction.
            </b>{" "}
            The award acknowledges the hard work and dedication of every member{" "}
            <br /> of the team who has contributed to the success of the
            company. <br /> <br />
            <b> Ismail Shah, the CEO of Eziline Software House Pvt Ltd</b>,
            received the Best Services Award in the <br /> IT sector from the{" "}
            <b>President of Pakistan, Dr. Arif Alvi</b>, in recognition of his
            remarkable <br /> contributions to the country's technology
            industry.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg d-flex justify-content-start mx-5"
            style={{ fontSize: "15px" }}
          >
            Eziline profile
          </button>
        </p>
      </div>
    </div>
  );
}
export default Hero;
