import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  ARTICLES_PAGINATION,
} from '../actions/actionTypes';

const initialState = {
  articles: [],
  isLoading: false,
  errors: '',
  articlesCount: 0,
  currentPage: 1,
};

const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_ARTICLES_SUCCESS: {
      const {
        payload: { articles, articlesCount },
      } = action;
      return { ...state, isLoading: false, articles, articlesCount };
    }
    case GET_ARTICLES_FAILURE: {
      const {
        payload: { errors },
      } = action;
      return { ...state, errors, isLoading: false };
    }
    case ARTICLE_FAVORITED:
    case ARTICLE_UNFAVORITED: {
      const {
        payload: { article },
      } = action;
      const { articles } = state;
      return {
        ...state,

        articles: articles.map((art) => {
          if (art.slug === article.slug) {
            return {
              ...article,
              favorited: article.favorited,
              favoritesCount: article.favoritesCount,
            };
          }
          return art;
        }),
      };
    }
    case ARTICLES_PAGINATION: {
      const {
        payload: { currentPage },
      } = action;
      return {
        ...state,
        currentPage,
      };
    }
    default:
      return state;
  }
};

export default getArticlesReducer;
