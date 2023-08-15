import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../../FakeData/fakeData";
import "swiper/css";

const Hero = () => {
  return (
    <main className=" container overflow-x-hidden lg:mr-0 lg:ml-auto mx-auto pt-32 pb-24 ">
      <div className="content_container">
        <div className="row grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="col  ">Col 1</div>
          <div className="col col-span-2    ">
            <div className="slider_row grid grid-cols-3 gap-4 -mr-10">
              <div className="image-container">
                <img className="rounded " src={data[0].image} alt="image" />
              </div>
              <div className="image-container ">
                <img className="rounded " src={data[1].image} alt="image" />
              </div>
              <div className="image-container">
                <img className="rounded " src={data[2].image} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
