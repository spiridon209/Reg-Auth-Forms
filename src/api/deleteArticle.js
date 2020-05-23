import axios from 'axios';
import rootApiUrl from './rootApiUrl';

// axios.defaults.headers.common.Authorization = `Token ${token}`;

const deleteArticleFetch = async (slug) => {
  const deleteArticleUrl = `${rootApiUrl}/articles/${slug}`;
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Token ${token}` };
  const response = await axios.delete(
    deleteArticleUrl,

    { headers }
  );
  return response;
};

export default deleteArticleFetch;
