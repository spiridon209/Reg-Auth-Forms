import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';
import './Article.scss';
import { LikeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { favoriteArticle, unfavoriteArticle } from '../../redux/actions/getArticles';
import getArticleFetch from '../../api/getArticle';

import { deleteArticle } from '../../redux/actions/deleteArticle';

const Article = (props) => {
  const {
    match: {
      params: { slug },
    },
    favoriteArticleFunc,
    unfavoriteArticleFunc,
    username,
    deleteProcessing,
    deleteArticleFunc,
  } = props;

  const [article, setArticle] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getArticleFetch(slug)
      .then((response) => response.data)
      .then((data) => data.article)
      .then((updatedArticle) => setArticle(() => updatedArticle));
  }, [slug]);

  if (article === null) {
    return <div>Article is loading...</div>;
  }

  const { favorited, favoritesCount } = article;

  const updateBtnHandler = () => {
    history.push(`${process.env.PUBLIC_URL}/articles/${slug}/edit`);
  };

  const deleteBtnHandler = () => {
    deleteArticleFunc(slug).then((answer) => {
      if (answer.status === 200) {
        history.push(`${process.env.PUBLIC_URL}/`);
      }
      // else {
      //   console.log(answer);
      // }
    });
  };

  const handleLikeArticle = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (favorited) {
      unfavoriteArticleFunc(slug);
      setArticle(() => ({
        ...article,
        favorited: !favorited,
        favoritesCount: favoritesCount - 1,
      }));
    } else {
      favoriteArticleFunc(slug);
      setArticle(() => ({
        ...article,
        favorited: !favorited,
        favoritesCount: favoritesCount + 1,
      }));
    }
  };

  let likeBtnState = 'LikeButton';

  if (favorited) {
    likeBtnState = 'LikeButton LikeButton__Liked';
  }

  return (
    <div className="Article">
      <div className="Article-Meta">
        <div className="Meta-Date">{new Date(article.createdAt).toDateString()}</div>
        <div className="Meta-Author">{article.author.username}</div>
      </div>
      <h1 className="Article-Header">{article.title}</h1>
      <div className="Article-Description">{article.description}</div>
      <div className="Article-Body">{article.body}</div>
      <ul className="Article-TagsList">
        {article.tagList.map((tag) => (
          <li key={tag} className="TagList-Item">
            {tag}
          </li>
        ))}
      </ul>
      <div className="Likes">
        <button className={likeBtnState} type="button" onClick={handleLikeArticle}>
          <LikeTwoTone />
          {favoritesCount}
        </button>
      </div>
      {article.author.username === username ? (
        <div className="Article-Buttons">
          <Button className="Buttons-UpdateBtn" onClick={updateBtnHandler}>
            Update article
          </Button>
          <Button
            danger
            loading={deleteProcessing}
            className="Buttons-UpdateBtn"
            onClick={deleteBtnHandler}
          >
            Delete article
          </Button>
          <div className="Article-DeliteError" />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    deleteProcessing: state.deleteArticle.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoriteArticleFunc: (slug) => dispatch(favoriteArticle(slug)),
    unfavoriteArticleFunc: (slug) => dispatch(unfavoriteArticle(slug)),
    deleteArticleFunc: (slug) => dispatch(deleteArticle(slug)),
  };
};

Article.propTypes = {
  username: PropTypes.string.isRequired,
  deleteProcessing: PropTypes.bool.isRequired,
  deleteArticleFunc: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
  favoriteArticleFunc: PropTypes.func.isRequired,
  unfavoriteArticleFunc: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Article));
