import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articlesPagination } from '../../redux/actions/getArticles';

const MyPagination = (props) => {
  const { articlesCount, currentPage, switchPage } = props;

  const changePageHandler = (page) => {
    switchPage({ currentPage: page });
  };

  return (
    <Pagination
      showSizeChanger={false}
      current={currentPage}
      total={articlesCount}
      onChange={changePageHandler}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    articlesCount: state.getArticles.articlesCount,
    currentPage: state.getArticles.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: (currentPage) => dispatch(articlesPagination(currentPage)),
  };
};

MyPagination.propTypes = {
  articlesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  switchPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPagination);
