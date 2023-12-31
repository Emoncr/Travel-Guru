import React from "react";
import Header from "../Header/Header";

import Hero from "../Hero/Hero";
const Home = () => {
  return (
    <section className="py-5 home_container bg-hero-pattern bg-cover bg-center ">
      <div className="inner_section px-3">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default Home;
