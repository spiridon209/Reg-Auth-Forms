import deleteAticleFetch from '../../api/deleteArticle';
import {
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from './actionTypes';

export const deleteArticleRequest = () => {
  return {
    type: DELETE_ARTICLE_REQUEST,
  };
};

export const deleteArticleSuccess = () => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
  };
};

export const deleteArticleFailure = (payload) => {
  return { type: DELETE_ARTICLE_FAILURE, payload };
};

export const deleteArticle = (slug) => {
  return async (dispatch) => {
    dispatch(deleteArticleRequest());
    try {
      const response = await deleteAticleFetch(slug);
      dispatch(deleteArticleSuccess());
      return response;
    } catch (err) {
      dispatch(deleteArticleFailure(err.response.data.errors));
      return err;
    }
  };
};
