import { AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  token: null,
  username: "",
  email: "",
  isLogIn: true,
  id: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      const { payload } = action;
      return { ...payload };
    default:
      return state;
  }
};

export default authReduser;
