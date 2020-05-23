import updateAticleFetch from '../../api/updateArticle';
import {
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
} from './actionTypes';

export const updateArticleRequest = () => {
  return {
    type: UPDATE_ARTICLE_REQUEST,
  };
};

export const updateArticleSuccess = () => {
  return {
    type: UPDATE_ARTICLE_SUCCESS,
  };
};

export const updateArticleFailure = (payload) => {
  return { type: UPDATE_ARTICLE_FAILURE, payload };
};

export const updateArticle = (data, slug) => {
  return async (dispatch) => {
    dispatch(updateArticleRequest());
    try {
      const response = await updateAticleFetch(data, slug);
      dispatch(updateArticleSuccess());
      return response.data.article;
    } catch (err) {
      dispatch(updateArticleFailure(err.response.data.errors));
      return err;
    }
  };
};
