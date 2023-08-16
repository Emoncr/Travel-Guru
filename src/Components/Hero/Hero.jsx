import React, { useState } from "react";
import data from "../../FakeData/fakeData";


import { BsArrowRight } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  const [indexCount, setIndexCount] = useState(0);
  const [secoundSlideIndex, setSecoundSlideIndex] = useState(indexCount + 1);
  const [thirdSlideIndex, setThirdSlideIndex] = useState(secoundSlideIndex + 1);

  const handlePrevClick = () => {
    const isFirstslide = indexCount === 0;
    const newCountIndex = isFirstslide ? data.length - 1 : indexCount - 1;
    setIndexCount(newCountIndex);

    //=========handling secound image========//
    const isSecoundImgFirstIndex = secoundSlideIndex === 0;
    const newCountIndexSecound = isSecoundImgFirstIndex
      ? data.length - 1
      : secoundSlideIndex - 1;
    setSecoundSlideIndex(newCountIndexSecound);

    //=======handling third index image ======//

    const isThirdImgFirstIndex = thirdSlideIndex === 0;
    const newCountIndexThird = isThirdImgFirstIndex
      ? data.length - 1
      : thirdSlideIndex - 1;
    setThirdSlideIndex(newCountIndexThird);
  };

const handleAfterClick =()=>{
  
}

  return (
    <main className=" container overflow-x-hidden lg:mr-auto lg:ml-auto mx-auto pt-28 pb-24 px-6 ">
      <div className="content_container">
        <>
          <div className="row grid grid-cols-1 lg:grid-cols-5 gap-4 ">
            <div className="col lg:col-span-2  ">
              <div className="content-container">
                <h1 className="text-6xl text-white">{data[indexCount].name}</h1>
                <div className="description text-md w-96 text-white mt-4">
                  <p>{data[indexCount].description}</p>
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
                {/* {data.map((content) => (
                  <HeroSlider key={content.category} data={content} />
                ))} */}
                <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5">
                  <img
                    className="  mr-auto ml-auto w-64"
                    src={data[indexCount].image}
                    alt="image"
                  />
                  <h1 className="text-xl absolute bottom-7 left-4 text-white">
                    {data[indexCount].name}
                  </h1>
                </div>

                {/* Secound Image of slide  */}
                <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5">
                  <img
                    className="  mr-auto ml-auto w-64"
                    src={data[thirdSlideIndex].image}
                    alt="image"
                  />
                  <h1 className="text-xl absolute bottom-7 left-4 text-white">
                    {data[thirdSlideIndex].name}
                  </h1>
                </div>

                {/* thired image of slide  */}
                <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5">
                  <img
                    className="  mr-auto ml-auto w-64"
                    src={data[secoundSlideIndex].image}
                    alt="image"
                  />
                  <h1 className="text-xl absolute bottom-7 left-4 text-white">
                    {data[secoundSlideIndex].name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="btn-container flex justify-between items-center w-40 mx-auto mt-20">
          <button
            onClick={handlePrevClick}
            className="prev_btn brand_btn text-black"
          >
            <FaAngleLeft />
          </button>
          <button className="after_btn brand_btn text-black">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
