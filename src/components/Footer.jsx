import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="social-icons">
              <li>
                <i class="fas fa-mobile-alt"></i>{" "}
                <h5>
                  +234 803 490 9300 | +234 703 656 2308 | +234 815 754 3038{" "}
                </h5>
              </li>
              <li>
                <i class="far fa-clock"></i>{" "}
                <h5>Mo-Fri: 7am - 6pm | Sat: 10am - 4pm | Sun: off</h5>
              </li>
              <li></li>
              <i className="fas fa-envelope"></i>
              <h5>fludsystem_wservices@yahoo.com</h5>
              <li>
                <i class="fas fa-house-user"></i>
                <h5>#418B AKA NUNG-UDOE ROAD, OWORUTA, UYO, AKWA IBOM</h5>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="social-icons">
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            {new Date().getFullYear()} &copy; Flud System Works. All Rights
            Reserved | <Link to="#">Privacy Policy</Link> |{" "}
            <Link to="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
