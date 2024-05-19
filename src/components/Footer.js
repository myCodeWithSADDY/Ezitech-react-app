import React from "react";
import '../styles/footer.scss'
import background from '../images/footerbg.webp'
function Footer() {
  return ( 
  <div>
 <div className="footerimg my-5">
  <div className="container text-center"><h1>It’s time to <h1 className="start">Start</h1> investing in yourself</h1></div>
  <br /> <br />
  <div className="container d-flex justify-content-center">
   <img className="img" src={background} alt="error" />
   </div>
   </div>
   {/* footer */}
    <div className="footer">
      <div className="bg-light text-white text-center" />
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>About</h5>
            <p >
              Ezitech Institute provides a platform for newcomers to launch
              their IT and freelancing careers. Our emphasis on practical
              information technology courses that are career and work oriented
              makes us the top computer institute in Rawalpindi, Islamabad,
              Pakistan.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Popular Courses</h5>
            <ul className="list-unstyled">
              <li><a href="#">Online arbitrage mastermind 2.0</a></li>
              <li><a href="#">Definition for digital marketing</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Pages</h5>
            <ul className="list-unstyled ">
              <li className="textDecor">
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">INTERNSHIP</a>
              </li>
              <li>
                <a href="#">CODELAB</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <div className="address text-left mx-2"><i className="fa-solid fa-location-dot my-3 mx-2"></i>
            Office #304-B Amna Plaza, near Radio Pakistan,  Rawalpindi, Punjab 46000
              <br />
              <br />
              <i className="fa-solid fa-phone mx-2"></i>
              +923455555396
              <br />
              <br />
              <i className="fa-solid fa-envelope mx-2"></i>
              info@ezitech.org
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
