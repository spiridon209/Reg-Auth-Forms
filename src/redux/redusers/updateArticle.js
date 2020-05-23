import {
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isProcessing: false,

  errors: '',
};

const updateArticleReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_REQUEST: {
      return { ...state, isProcessing: true };
    }

    case UPDATE_ARTICLE_SUCCESS: {
      return {
        ...state,
        isProcessing: false,
      };
    }

    case UPDATE_ARTICLE_FAILURE: {
      const { payload } = action;
      return { ...state, errors: payload, isProcessing: false };
    }

    default:
      return state;
  }
};

export default updateArticleReduser;
