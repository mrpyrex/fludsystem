import React from "react";
import delivery from "../img/delivery.svg";
import maintenance from "../img/renovation.svg";
import design from "../img/prototype.svg";
import corrosion from "../img/corrosive.svg";
import contract from "../img/contract.svg";

const HomeServices = () => {
  return (
    <section id="home-service">
      <div className="container">
        <h2>What we can offer</h2>
        <div className="row text-center">
          <div className="col-md-4 box">
            <h3>General Maintenance</h3>
            <img src={maintenance} alt="" />
          </div>
          <div className="col-md-4 box">
            <h3>Engineering Design</h3>
            <img src={design} alt="" />
          </div>
          <div className="col-md-4 box">
            <h3>Logistics & Supply Chain</h3>
            <img
              src={delivery}
              alt="https://www.flaticon.com/authors/eucalyp"
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 box">
            <h3>Corrosion Control</h3>
            <img src={corrosion} alt="" />
          </div>
          <div className="col-md-6 box">
            <h3>General Contracting</h3>
            <img src={contract} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
