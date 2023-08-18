export const bookingState = {
  bookingData: {},
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING_DATA":
      const { bookingInfo } = action.payload;
      return { ...state, bookingData: bookingInfo };

    default:
      return state;
  }
};
