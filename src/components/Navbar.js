import React from "react";
import '../styles/navbar.scss'

export default function Navbar() {
  return <div className="vh-90 overflow-hidden my-5">
    {/* navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container">
    <a className="navbar-brand fs-4" href="#"><b>Ezitech</b><br />learning institude</a>
    {/* toggler */}
    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* sidebar */}
    <div className="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      {/* sidebarheader */}
      <div className="offcanvas-header text-white">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><b>Ezitech</b><br />learning institude</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CERTIFICATIONS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">INTERNSHIPS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SEMINARS</a>
          </li>  
        </ul>
        <form className="d-flex mx-5" role="search">
        <button className="btn btn-transparent r-4" type="button"><i className="fa-regular fa-heart"></i></button>
        <button className="btn btn-transparent r-4" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        </form>
      </div>
    </div>
  </div>
</nav>
</div>

}
