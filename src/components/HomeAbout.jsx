import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>About Us</h2>
            <Link className="btn btn-primary">Learn More</Link>
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              architecto, inventore blanditiis ex dolore maiores, laborum
              ducimus rerum magnam velit magni perferendis nam similique quas
              ipsam nostrum iusto, voluptate voluptatibus.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              architecto, inventore blanditiis ex dolore maiores, laborum
              ducimus rerum magnam velit magni perferendis nam similique quas
              ipsam nostrum iusto, voluptate voluptatibus.{" "}
            </p>
          </div>
          <div className="col-md-3 text-center">
            <h2>Ademola Afolabi</h2>
            <p>Executive Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
