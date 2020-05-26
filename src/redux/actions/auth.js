import { authFetch, regFetch, autoLogInFetch } from '../../api/authRequest';
import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS, LOG_OUT, RESET_ERRORS } from './actionTypes';
import { removeToken, setToken, getToken } from '../../localStorage';

export const authRequest = (isProcessing) => {
  return {
    type: AUTH_REQUEST,
    payload: { isProcessing },
  };
};

export const authSuccess = (username, token, isLogIn = true, isProcessing = false) => {
  setToken(token);
  return {
    type: AUTH_SUCCESS,
    payload: { username, token, isLogIn, isProcessing },
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
      const { username, token } = response.data.user;
      dispatch(authSuccess(username, token));
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
      const { username, token } = response.data.user;
      dispatch(authSuccess(username, token));
    } catch (err) {
      dispatch(authFailure(err.response.data.errors));
    }
  };
};

export const logOut = () => {
  removeToken();
  localStorage.removeItem('userId');
  return {
    type: LOG_OUT,
  };
};

export const autoLogIn = () => {
  return async (dispatch) => {
    dispatch(authRequest(true));
    try {
      const TOKEN = getToken();
      if (!TOKEN) {
        dispatch(logOut());
        return;
      }
      const headers = { Authorization: `Token ${TOKEN}` };
      const response = await autoLogInFetch(headers);
      const { username, token } = response.data.user;
      dispatch(authSuccess(username, token));
    } catch (err) {
      dispatch(authFailure(err.response.data.errors));
    }
  };
};

export const resetErrors = () => {
  return {
    type: RESET_ERRORS,
  };
};
