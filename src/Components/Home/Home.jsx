import React from "react";
import Header from "../Header/Header";
import './Home.css'
import Hero from "../Hero/Hero";
const Home = () => {
  return (
<section className="py-5 bg-hero-pattern bg-cover bg-center ">
  <div className="inner_section px-3">
    <Header/>
    <Hero/>
  </div>
</section>
  );
};

export default Home;
