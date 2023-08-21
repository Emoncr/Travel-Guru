export const loginUserState = {
  user: {  },
};

export const loignUserReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      const { userData } = action.payload;
      return { ...state, user: userData };

    case "USER_LOGOUT":
      return { ...state, user: {} };

    default:
      return state;
  }
};
