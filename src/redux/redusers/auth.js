import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS, LOG_OUT } from '../actions/actionTypes';

const initialState = {
  token: null,
  username: '',
  email: '',
  isLogIn: true,
  id: null,
  errors: '',
  isProcessing: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST: {
      const {
        payload: { isProcessing },
      } = action;
      return { ...state, isProcessing };
    }

    case AUTH_SUCCESS: {
      const { payload } = action;
      return { ...state, ...payload };
    }

    case AUTH_FAILURE: {
      const {
        payload: { errors, isProcessing },
      } = action;
      return { ...state, errors, isProcessing };
    }

    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
};

export default authReduser;
