import createArticleFetch from '../../api/createArticle';
import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
} from './actionTypes';

export const createArticleRequest = () => {
  return {
    type: CREATE_ARTICLE_REQUEST,
  };
};

export const createArticleSuccess = (payload) => {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    payload,
  };
};

export const createArticleFailure = (payload) => {
  return { type: CREATE_ARTICLE_FAILURE, payload };
};

export const createArticle = (data) => {
  return async (dispatch) => {
    dispatch(createArticleRequest());
    try {
      await createArticleFetch(data);
      dispatch(createArticleSuccess());
    } catch (err) {
      dispatch(createArticleFailure(err.response.data.errors));
    }
  };
};
