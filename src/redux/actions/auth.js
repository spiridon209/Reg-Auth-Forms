import axios from 'axios';
import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS, LOG_OUT } from './actionTypes';

export const authRequest = (isProcessing) => {
  return {
    type: AUTH_REQUEST,
    payload: { isProcessing },
  };
};

export const authSuccess = (username, email, token, id, isLogIn = true, isProcessing = false) => {
  return {
    type: AUTH_SUCCESS,
    payload: { username, email, token, id, isLogIn, isProcessing },
  };
};

export const authFailure = (errors, isProcessing = false) => {
  return { type: AUTH_FAILURE, payload: { errors, isProcessing } };
};

export const auth = (mail, password, isLogIn, name) => {
  return async (dispatch) => {
    let authData = { username: name, email: mail, password };
    let apiUrl = 'https://conduit.productionready.io/api/users';

    if (isLogIn) {
      authData = { email: mail, password };
      apiUrl = 'https://conduit.productionready.io/api/users/login';
    }
    dispatch(authRequest(true));
    try {
      const response = await axios.post(apiUrl, {
        user: authData,
      });
      const { username, email, token, id } = response.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
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
