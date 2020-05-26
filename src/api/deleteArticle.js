import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

const deleteArticleFetch = async (slug) => {
  const deleteArticleUrl = urls.getArticlePath(slug);
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const response = await axios.delete(
    deleteArticleUrl,

    { headers }
  );
  return response;
};

export default deleteArticleFetch;
