export const bookingState = {
  bookingData: [],
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKING_DATA':
        const {bookingData}=action.payload;
        console.log(bookingData);

    default:
      return state;
  }
};
