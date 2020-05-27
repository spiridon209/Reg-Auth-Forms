const routesPaths = {
  getHome: () => `${process.env.PUBLIC_URL}/`,
  getArticle: () => `${process.env.PUBLIC_URL}/articles/:slug`,
  getReg: () => `${process.env.PUBLIC_URL}/signup`,
  getAuth: () => `${process.env.PUBLIC_URL}/login`,
  getCreateArticle: () => `${process.env.PUBLIC_URL}/add`,
  getArticleEditor: () => `${process.env.PUBLIC_URL}/articles/:slug/edit`,
};

export default routesPaths;
