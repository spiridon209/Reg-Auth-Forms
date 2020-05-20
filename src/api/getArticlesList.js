import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const getArticlesFetch = async (offset) => {
  const getArticlesListUrl = `${rootApiUrl}/articles?limit=10&offset=${offset}`;
  const response = await axios.get(getArticlesListUrl);
  return response;
};

export default getArticlesFetch;
