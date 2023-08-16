import React from "react";
import {useForm} from "react-hook-form";

const BookingForm = ({ destinationData }) => {
  const { data, indexCount } = destinationData;

  const { register, handleSubmit } = useForm();

  const handleBooking=(data)=>{
console.log(data);
  }

  return (
    <>
      <div className="form_container">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form 
            onSubmit={handleSubmit(handleBooking)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
              <div className="mb-4">
                <label
                  className="block text-gray text-sm font-medium mb-2"
                  for="Origin"
                >
                  Origin
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none focus:shadow-outline"
                  id="origin"
                  type="text"
                  {...register("origin")}
                  placeholder="Origin"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray text-sm font-medium mb-2"
                  for="Destination"
                >
                  Destination
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                  id="destination"
                  type="text"
                  placeholder="Destination"
                  {...register("destination")}
                  defaultValue={data[indexCount].name}
                />
              </div>

              <div className="date_container flex justify-between">
                <div className="mb-6">
                  <label
                    className="block text-gray text-sm font-medium mb-2"
                    for="Destination"
                  >
                    From,
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="destination"
                    type="date"
                    placeholder="From"
                    {...register("checkIn")}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray text-sm font-medium mb-2"
                    for="Destination"
                  >
                    To,
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="destination"
                    type="date"
                    placeholder="To"
                    {...register("checkOut")}
                  />
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
