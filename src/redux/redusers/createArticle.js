import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isProcessing: false,
  response: null,
  errors: '',
};

const createArticleReduser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_REQUEST: {
      return { ...state, isProcessing: true };
    }

    case CREATE_ARTICLE_SUCCESS: {
      const {
        payload: { body },
      } = action;
      return { ...state, isProcessing: false, response: body };
    }

    case CREATE_ARTICLE_FAILURE: {
      const { payload } = action;
      return { ...state, errors: payload, isProcessing: false };
    }

    default:
      return state;
  }
};

export default createArticleReduser;
