import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { getArticles } from '../../redux/actions/getArticles';
import ArticlesPagination from '../ArticlesPagination/ArticlesPagination';
import './ArticleList.scss';

const ArticleList = (props) => {
  const { articles, isLoading, errors, getArticlesFunc, offset } = props;

  useEffect(() => {
    getArticlesFunc(offset);
  }, [getArticlesFunc, offset]);

  if (isLoading) {
    return <div>Articles is loading...</div>;
  }

  if (errors) {
    return <div>Something went wrong {errors}</div>;
  }

  return (
    <div className="ArticleList">
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
      <ArticlesPagination />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.getArticles.articles,
    isLoading: state.getArticles.isLoading,
    errors: state.getArticles.errors,
    offset:
      state.getArticles.currentPage === 1
        ? 0
        : Math.floor((state.getArticles.currentPage - 1) * 10),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getArticlesFunc: (offset) => dispatch(getArticles(offset)) };
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  getArticlesFunc: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  // articles: PropTypes.shape({ map: PropTypes.func.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
