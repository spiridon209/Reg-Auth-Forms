import { combineReducers } from 'redux';
import authReducer from './auth';
import createArticleReduser from './createArticle';

export default combineReducers({
  auth: authReducer,
  createArticle: createArticleReduser,
});
