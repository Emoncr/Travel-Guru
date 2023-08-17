import React, { createContext, useReducer } from "react";
import { bookingReducer, bookingState } from "../Reducers/bookingReducer";

export const bookingContex = createContext();
const BookingContext = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, bookingState);

  const addBookingData = (bookingData) => {
    dispatch({
      type: "ADD_BOOKING_DATA",
      payload: bookingData,
    });
  };


  // console.log(state);
  return (
    <bookingContex.Provider value={state }>
      {children}
    </bookingContex.Provider>
  );
};

export default BookingContext;
