import React from "react";

const HeroSlider = ({ data }) => {
  const { category, name, description, image } = data;

  return (
    <div className="image-container relative  first:rounded-2xl first:border-4 first:border-yellow first:scale-110 first:mr-5">
      <img className="  mr-auto ml-auto w-64" src={image} alt="image" />
      <h1 className="text-xl absolute bottom-7 left-4 text-white">{name}</h1>
    </div>
  );
};

export default HeroSlider;
