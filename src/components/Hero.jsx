import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container hero-content">
        <h3>Welcome to</h3>
        <h1>Flud System Works</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          velit ullam sed eaque neque accusantium, temporibus deleniti? Ipsa,
          fuga dicta?
        </p>
        <Link className="btn btn-primary">Learn More</Link>
        <Link className="btn btn-danger ml-2">Our Projects</Link>
      </div>
    </div>
  );
};

export default Hero;
