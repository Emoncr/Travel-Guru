import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useNavigation } from "react-router-dom";
import { bookingContext } from "../../Contexts/BookingContext";

const BookingForm = ({ destinationData }) => {
  const { addBookingData } = useContext(bookingContext);
  const { data, indexCount } = destinationData;
  const { register, handleSubmit } = useForm();
  console.log(data);
  const productPage = data[indexCount].category;
  console.log(productPage);
  const navigate = useNavigate();

  const handleBooking = (data) => {
    addBookingData(data);
    navigate(`/destination/${productPage}`);
  };

  return (
    <>
      <div className="form_container">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit(handleBooking)}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
            >
              <div className="mb-4">
                <label className="block text-gray text-sm font-medium mb-2">
                  Origin
                  <input
                    className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none focus:shadow-outline"
                    id="origin"
                    type="text"
                    {...register("origin")}
                    placeholder="Origin"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block text-gray text-sm font-medium mb-2">
                  Destination
                  <input
                    className="mt-1  shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="destination"
                    type="text"
                    placeholder="Destination"
                    {...register("destination")}
                    defaultValue={data[indexCount].name}
                  />
                </label>
              </div>

              <div className="date_container flex justify-between">
                <div className="mb-6">
                  <label className="block text-gray text-sm font-medium mb-2">
                    From,
                    <input
                      className=" mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                      id="destination"
                      type="date"
                      placeholder="From"
                      {...register("checkIn")}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-gray text-sm font-medium mb-2">
                    To,
                    <input
                      className="shadow mt-1 appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                      id="destination"
                      type="date"
                      placeholder="To"
                      {...register("checkOut")}
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="brand_btn bg-yellow hover:bg-blue-dark text-black font-bold py-3 w-full px-4 rounded  "
                  type="submit"
                >
                  Start Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
