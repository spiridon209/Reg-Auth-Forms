import { combineReducers } from 'redux';
import authReducer from './auth';
import createArticleReduser from './createArticle';
import getArticlesReducer from './getArticles';
import updateArticleReducer from './updateArticle';
import deleteArticleReducer from './deleteArticle';

export default combineReducers({
  auth: authReducer,
  createArticle: createArticleReduser,
  getArticles: getArticlesReducer,
  updateArticle: updateArticleReducer,
  deleteArticle: deleteArticleReducer,
});
