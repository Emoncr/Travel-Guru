import React, { useContext } from "react";
import Header from "../Header/Header";

import roomDatas from "../../FakeData/roomData";
import Room from "../Room/Room";
import { bookingContext } from "../../Contexts/BookingContext";
const ProductPage = () => {
 
 
  const {state} = useContext(bookingContext);

const {bookingData,} = state;
console.log(bookingData);

const {destination}= bookingData;
  return (
    <>
      <section className="pt-5 px-3">
        <Header />
      </section>
      <section className="pb-5 lg:px-10 px-6 mt-2">
        <div className="  border-t-[1px] border-t-[#D1D1D1] mx-auto">
          <div className="py-10 lg:py-10 max-w-6xl mx-auto ">
            <div className="grid  lg:grid-flow-row grid-cols-1 lg:grid-cols-2  gap-10">
              <div className="">
                <div className="booking_detail_container">
                  <p className="text-[#2B2B2B] text-sm font-semibold">
                    252 stays Apr 13-17 3 guests
                  </p>
                  <p className="mt-1 text-2xl font-bold text-black ">
                    Stay in
                    <span className="ml-1 stroked_text text-yellow lg:text-3xl">
                      {destination}
                    </span>
                  </p>
                </div>
                <div className="room_container max-w-xl mx-auto  mt-5">
                  {roomDatas.map((room) => (
                    <Room room={room} />
                  ))}
                </div>
              </div>
              <div className="bg-brown-900">fasd</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
