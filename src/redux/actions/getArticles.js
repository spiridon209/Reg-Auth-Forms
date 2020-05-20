import getArticlesFetch from '../../api/getArticlesList';
import { favoriteArticleFetch, unfavoriteArticleFetch } from '../../api/favoriteUnfavoriteArticle';
import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  ARTICLES_PAGINATION,
} from './actionTypes';

export const getArticlesRequest = () => {
  return {
    type: GET_ARTICLES_REQUEST,
  };
};

export const getArticlesSuccess = (payload) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload,
  };
};

export const getArticlesFailure = (payload) => {
  return { type: GET_ARTICLES_FAILURE, payload };
};

export const getArticles = (offset) => {
  return async (dispatch) => {
    dispatch(getArticlesRequest());
    try {
      const response = await getArticlesFetch(offset);
      dispatch(getArticlesSuccess(response.data));
    } catch (err) {
      dispatch(getArticlesFailure(err));
    }
  };
};

export const articleFavorited = (payload) => {
  return { type: ARTICLE_FAVORITED, payload };
};

export const articleUnfavorited = (payload) => {
  return { type: ARTICLE_UNFAVORITED, payload };
};

export const favoriteArticle = (slug) => {
  return async (dispatch) => {
    try {
      const response = await favoriteArticleFetch(slug);
      dispatch(articleFavorited(response.data));
    } catch (err) {
      dispatch(getArticlesFailure(err));
    }
  };
};

export const unfavoriteArticle = (slug) => {
  return async (dispatch) => {
    try {
      const response = await unfavoriteArticleFetch(slug);
      dispatch(articleFavorited(response.data));
    } catch (err) {
      dispatch(getArticlesFailure(err));
    }
  };
};

export const articlesPagination = (payload) => {
  return { type: ARTICLES_PAGINATION, payload };
};
