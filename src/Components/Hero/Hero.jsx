import React, { useState } from "react";
import data from "../../FakeData/fakeData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react";
import BookingForm from "../Booking Form/BookingForm";

const Hero = () => {

  const [indexCount, setIndexCount] = useState(0);
  const [secoundSlideIndex, setSecoundSlideIndex] = useState(indexCount + 1);
  const [thirdSlideIndex, setThirdSlideIndex] = useState(secoundSlideIndex + 1);

  const [bookingClicked, SetBookingClicked] = useState(true);

  let slidingTime = 5000;

  const handlePrevClick = () => {
    slidingTime = 0;
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

  const handleAfterClick = () => {
    slidingTime = 0;
    const lastSlideNumber = data.length - 1;
    const isLastSlide = indexCount === lastSlideNumber;
    const newSliderIndex = isLastSlide
      ? data.length - (indexCount + 1)
      : indexCount + 1;
    setIndexCount(newSliderIndex);

    // ========handle secound image after click==========//
    const isLastSlideSecound = secoundSlideIndex === lastSlideNumber;
    const newSlideSecound = isLastSlideSecound
      ? data.length - (secoundSlideIndex + 1)
      : secoundSlideIndex + 1;
    setSecoundSlideIndex(newSlideSecound);

    // ========handle third image after click==========//
    const isLastSlideThird = thirdSlideIndex === lastSlideNumber;
    const newSlideThird = isLastSlideThird
      ? data.length - (thirdSlideIndex + 1)
      : thirdSlideIndex + 1;
    setThirdSlideIndex(newSlideThird);
  };

  const autoPlayItem = (prevFunction) => {
    setInterval(() => {
      prevFunction();
    }, slidingTime);
  };
  // autoPlayItem(handlePrevClick)

  return (
    <main className="home_container 2xl:container overflow-x-hidden 2xl:mr-auto px-4  lg:px-10 lg:mr-0 lg:ml-auto mx-auto pt-28 pb-24  ">
      <div className="content_container ">
        <div className="row flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-5 gap-10 ">
          <div className="col lg:col-span-2 mt-5 lg:mt-0  ">
            <div className="content-container">
              <h1 className="text-6xl text-white">{data[indexCount].name}</h1>
              <div className="description text-md max-w-6xl lg:w-96 text-white mt-4">
                <p>{data[indexCount].description}</p>
              </div>
              <div className="btn_container">
                <button
                  onClick={() => SetBookingClicked(!bookingClicked)}
                  className="brand_btn mt-4 "
                >
                  {bookingClicked ? (
                    <>
                      Chose Other <BsArrowRight className="ml-2" />
                    </>
                  ) : (
                    <>
                      Booking Now <BsArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="col lg:col-span-3 ">
            {bookingClicked ? (
              <BookingForm destinationData = {{data,indexCount}}/>
            ) : (
              <>
                <div className="slider_row flex gap-4 ">
                  <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5 ">
                    <img
                      className="  mr-auto ml-auto w-64 transition-all"
                      src={data[indexCount].image}
                      alt="image"
                    />
                    <p className="text-sm lg:text-xl absolute bottom-2 lg:bottom-7 left-2 lg:left-4 text-white">
                      {data[indexCount].name}
                    </p>
                  </div>

                  {/* Secound Image of slide  */}
                  <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5 transition-all">
                    <img
                      className="  mr-auto ml-auto w-64 transition-all"
                      src={data[thirdSlideIndex].image}
                      alt="image"
                    />
                    <p className="text-xs lg:text-xl absolute bottom-4 lg:bottom-7 left-2 lg:left-4 text-white">
                      {data[thirdSlideIndex].name}
                    </p>
                  </div>

                  {/* thired image of slide  */}
                  <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5 transition-all">
                    <img
                      className="  mr-auto ml-auto w-64 "
                      src={data[secoundSlideIndex].image}
                      alt="image"
                    />
                    <p className="text-xs lg:text-xl absolute bottom-4 lg:bottom-7 left-2 lg:left-4 text-white">
                      {data[secoundSlideIndex].name}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {bookingClicked ? (
          ""
        ) : (
          <div className="btn-container flex justify-between items-center w-28 lg:w-36 mx-auto mt-10 lg:mt-20">
            <IconButton
              color="amber"
              onClick={handlePrevClick}
              className="prev_btn  rounded-full text-xl text-black"
            >
              <FaAngleLeft />
            </IconButton>
            <IconButton
              color="amber"
              onClick={handleAfterClick}
              className="after_btn  rounded-full text-xl text-black"
            >
              <FaAngleRight />
            </IconButton>
          </div>
        )}
      </div>
    </main>
  );
};

export default Hero;
