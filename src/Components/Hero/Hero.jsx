import React, { useState } from "react";
import data from "../../FakeData/fakeData";
import "swiper/css";
import HeroSlider from "../Hero Slider/HeroSlider";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <main className=" container overflow-x-hidden lg:mr-auto lg:ml-auto mx-auto pt-32 pb-24 px-6 ">
      <div className="content_container">
        <div className="row grid grid-cols-1 lg:grid-cols-5 gap-4 ">
          <div className="col lg:col-span-2  ">
            <div className="content-container">
              <h1 className="text-6xl text-white">Cox's Bazaar</h1>
              <div className="description text-md w-96 text-white mt-4">
                <p>
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </p>
              </div>
              <div className="btn_container">
                <button className="brand_btn mt-4 ">
                  Booking <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="col lg:col-span-3">
            <div className="slider_row flex gap-4 ">
              {data.map((content) => (
                <HeroSlider key={content.category} data={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
