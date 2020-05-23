import {
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isProcessing: false,
  errors: '',
};

const deleteArticleReduser = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_REQUEST: {
      return { ...state, isProcessing: true };
    }

    case DELETE_ARTICLE_SUCCESS: {
      return {
        ...state,
        isProcessing: false,
      };
    }

    case DELETE_ARTICLE_FAILURE: {
      const { payload } = action;
      return { ...state, errors: payload, isProcessing: false };
    }

    default:
      return state;
  }
};

export default deleteArticleReduser;
