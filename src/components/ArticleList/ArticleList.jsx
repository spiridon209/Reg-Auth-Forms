import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import { getArticles } from '../../redux/actions/getArticles';

const ArticleList = (props) => {
  const { articles, isLoading, errors, getArticlesFunc } = props;

  useEffect(() => {
    getArticlesFunc();
  }, [getArticlesFunc]);

  if (isLoading) {
    return <div>Articles is loading...</div>;
  }

  if (errors) {
    return <div>Something went wrong {errors}</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.getArticles.articles,
    isLoading: state.getArticles.isLoading,
    errors: state.getArticles.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getArticlesFunc: () => dispatch(getArticles()) };
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  getArticlesFunc: PropTypes.func.isRequired,
  // articles: PropTypes.shape({ map: PropTypes.func.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
