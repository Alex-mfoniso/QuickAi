import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aitools from "../components/Aitools";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Aitools/>
      <Testimonial/>
      <Plan/>
    </>
  );
};

export default Home;
