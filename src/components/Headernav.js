import React from "react";
import '../styles/mystyle.css'

export default function Headernav() {
    return (
        <div className="info fixed-top">
            <div className="contact-info d-flex mx-3">
                <p><i className="fa-solid fa-phone"></i> +92 3455555396</p>
                <p><i className="fa-sharp fa-solid fa-location-dot"></i> Office /304-B Amna Plaza, Rawalpindi, Pakistan</p>
                <p><i className="fa-solid fa-clock"></i> Mon - Fri 8.00 - 20.00</p>
            </div>
            <div className="social-icons d-flex mx-2">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-behance"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className="auth-buttons mx-2">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>

    )
}
