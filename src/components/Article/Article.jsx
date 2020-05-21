import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Article.scss';
import { LikeTwoTone } from '@ant-design/icons';
import { favoriteArticle, unfavoriteArticle } from '../../redux/actions/getArticles';
import getArticleFetch from '../../api/getArticle';

const Article = (props) => {
  const {
    match: {
      params: { slug },
    },
    favoriteArticleFunc,
    unfavoriteArticleFunc,
  } = props;

  const [article, setArticle] = useState(null);

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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoriteArticleFunc: (slug) => dispatch(favoriteArticle(slug)),
    unfavoriteArticleFunc: (slug) => dispatch(unfavoriteArticle(slug)),
  };
};

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
  favoriteArticleFunc: PropTypes.func.isRequired,
  unfavoriteArticleFunc: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(Article));
