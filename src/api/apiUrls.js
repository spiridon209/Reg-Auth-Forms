const rootApiUrl = 'https://conduit.productionready.io/api';

const urls = {
  getLoginPath: () => `${rootApiUrl}/users/login`,
  getSignupPath: () => `${rootApiUrl}/users`,
  getAutoLoginPath: () => `${rootApiUrl}/user`,
  getCreateArticlePath: () => `${rootApiUrl}/articles`,
  getFavoriteArticlePath: (slug) => `${rootApiUrl}/articles/${slug}/favorite`,
  getArticlePath: (slug) => `${rootApiUrl}/articles/${slug}`,
  getArticlesListPath: (offset) => `${rootApiUrl}/articles?limit=10&offset=${offset}`,
};

export default urls;
