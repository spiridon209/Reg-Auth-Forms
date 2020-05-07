import axios from "axios";
import { AUTH_SUCCESS, LOG_OUT } from "./actionTypes";

export const auth = (email, password, isLogIn, username) => {
  return async (dispatch) => {
    let authData = { username, email, password };
    let apiUrl = "https://conduit.productionready.io/api/users";

    if (isLogIn) {
      authData = { email, password };
      apiUrl = "https://conduit.productionready.io/api/users/login";
    }

    try {
      const response = await axios.post(apiUrl, {
        user: authData,
      });
      console.log(response.data);
      const { username, email, token, id } = response.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      dispatch(authSuccess(username, email, token, id));
    } catch (err) {
      console.log("Error", err.header); // экшен и редюсер для неудачного запроса
    }
  };
};

export const authSuccess = (username, email, token, id, isLogIn = true) => {
  return {
    type: AUTH_SUCCESS,
    payload: { username, email, token, id, isLogIn },
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
