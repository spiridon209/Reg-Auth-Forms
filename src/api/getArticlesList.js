import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const getArticlesFetch = async () => {
  const getArticlesListUrl = `${rootApiUrl}/articles?limit=10`;
  const response = await axios.get(getArticlesListUrl);
  return response;
};

export default getArticlesFetch;
