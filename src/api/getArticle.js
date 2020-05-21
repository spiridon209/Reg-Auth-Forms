import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const token = localStorage.getItem('token');
const headers = { Authorization: `Token ${token}` };

const getArticleFetch = async (slug) => {
  const getArticleListUrl = `${rootApiUrl}/articles/${slug}`;
  const response = await axios.get(getArticleListUrl, { headers });
  return response;
};

export default getArticleFetch;
