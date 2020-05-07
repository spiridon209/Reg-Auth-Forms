import { LOG_IN } from "./actionTypes";

const initialState = {
  user: "",
  token: "",
  email: "",
  isLogIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      const { user, token, email } = action.payload;
      return { user, token, email, isLogIn: true };
  }
  return state;
};
