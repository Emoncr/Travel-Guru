import React from "react";
import { BsFillHouseFill, BsFillStarFill } from "react-icons/bs";
import {FaCheck} from 'react-icons/fa'
const Room = ({ room }) => {

  const {
    image,
    room_number,
    room_name,
    room_id,
    room_type,
    amenities,
    available,
    beds,
    cancel_type,
    rating,
    price_per_night,
  } = room;
  return (
    <>
      <div className="inner_room_container grid lg:grid-cols-2 grid-cols-1 shadow-xl rounded-2xl first:mt-0 mt-8">
        <div className=" lg:max-w-[300px]  ">
          <div className="room_image w-full h-full">
            <img className=" w-full h-full" src={image} alt="room image" />
          </div>
        </div>
        <div className="bg-white py-4 pr-5 pl-4">
          <p className="text-2xl font-bold">{room_name}</p>
          <div className="room_description mt-3">
            <p className="font-semibold text-sm text-[#6A6A6A] ">
              Beds: {beds}
            </p>
            <div className="feature_container  grid grid-cols-2">
              {amenities.map((offer) => (
                <p className="ml-1 mt-1 font-semibold text-xs text-[#6A6A6A] flex items-center">
                 <FaCheck className="text-green-800 text-[12px] mr-1"/> {offer},
                </p>
              ))}
            </div>

            <p className="font-bold text-sm mt-2 text-black flex">
              Room Type:
              <span className="flex items-center mx-1">
                <BsFillHouseFill className="text-yellow mr-1" /> {room_type}
              </span>
            </p>
          </div>
          <div className="price_container mt-4 flex items-center justify-between max-w-[220px]">
            <p className="font-semibold text-xl  text-yellow flex items-center">
              <BsFillStarFill className="mb-[1px] mr-1" /> {rating}
              <span className="text-black">/5</span>
            </p>
            <p className="font-semibold text-lg  text-black flex items-center">
              ${price_per_night}
              <span className="text-xs">/per night</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
