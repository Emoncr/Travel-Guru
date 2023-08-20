export const loginUserState = {
  user: {email:  "biplobemon5210@gmail.com"},
};

export const loignUserReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      const { userData } = action.payload;
      return { ...state, user: userData };

    default:
      return state;
  }
};
