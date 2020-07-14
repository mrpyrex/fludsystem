import React from "react";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import HomeTeam from "../components/HomeTeam";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <section>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeTeam />
      <Clients />
    </section>
  );
};

export default Home;
