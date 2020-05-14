import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const createArticleUrl = `${rootApiUrl}/articles`;
const token = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = `Token ${token}`;

const createArticleFetch = async (data) => {
  const response = await axios.post(createArticleUrl, {
    article: data,
  });
  return response;
};

export default createArticleFetch;
