import { combineReducers } from 'redux';
import authReducer from './auth';
import createArticleReduser from './createArticle';
import getArticlesReducer from './getArticles';

export default combineReducers({
  auth: authReducer,
  createArticle: createArticleReduser,
  getArticles: getArticlesReducer,
});
