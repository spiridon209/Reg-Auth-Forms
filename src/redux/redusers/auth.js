import { AUTH_SUCCESS, LOG_OUT } from "../actions/actionTypes";

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
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReduser;
