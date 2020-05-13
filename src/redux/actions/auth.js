import { authFetch, regFetch } from "../../api/authRequest";
import {
  AUTH_REQUEST,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  LOG_OUT,
  RESET_ERRORS,
} from "./actionTypes";

export const authRequest = (isProcessing) => {
  return {
    type: AUTH_REQUEST,
    payload: { isProcessing },
  };
};

export const authSuccess = (
  username,
  email,
  token,
  id,
  isLogIn = true,
  isProcessing = false
) => {
  return {
    type: AUTH_SUCCESS,
    payload: { username, email, token, id, isLogIn, isProcessing },
  };
};

export const authFailure = (errors, isProcessing = false) => {
  return { type: AUTH_FAILURE, payload: { errors, isProcessing } };
};

export const auth = (mail, password) => {
  return async (dispatch) => {
    dispatch(authRequest(true));
    try {
      const response = await authFetch({ email: mail, password });
      const { username, email, token, id } = response.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      dispatch(authSuccess(username, email, token, id));
    } catch (err) {
      dispatch(authFailure(err.response.data.errors));
    }
  };
};

export const reg = (mail, password, name) => {
  return async (dispatch) => {
    dispatch(authRequest(true));
    try {
      const response = await regFetch({
        username: name,
        email: mail,
        password,
      });
      const { username, email, token, id } = response.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      dispatch(authSuccess(username, email, token, id));
    } catch (err) {
      dispatch(authFailure(err.response.data.errors));
    }
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const resetErrors = () => {
  return {
    type: RESET_ERRORS,
  };
};
