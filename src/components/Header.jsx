import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-sm-4 mb-3 bg-white border-bottom shadow-sm fixed-top">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/">Company name </Link>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/about">
            About Us
          </Link>
          <Link className="p-2 text-dark" to="/services">
            Services
          </Link>
          <Link className="p-2 text-dark" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
