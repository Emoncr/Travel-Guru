import React, { createContext, useReducer } from "react";
import { bookingReducer, bookingState } from "../Reducers/bookingReducer";

export const bookingContext = createContext();

const BookingContext = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, bookingState);

  const addBookingData = (bookingInfo) => {
    dispatch({
      type: "ADD_BOOKING_DATA",
      payload: { bookingInfo },
    });
  };


  return (
    <bookingContext.Provider value={{ state, addBookingData }}>
      {children}
    </bookingContext.Provider>
  );
};

export default BookingContext;
