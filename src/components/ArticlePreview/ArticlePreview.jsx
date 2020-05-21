import React from 'react';
import './ArticlePreview.scss';
import { LikeTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { favoriteArticle, unfavoriteArticle } from '../../redux/actions/getArticles';

const ArticlePreview = (props) => {
  const {
    article: {
      slug,
      title,
      description,
      tagList,
      favorited,
      favoritesCount,
      createdAt,
      author: { username },
    },
    favoriteArticleFunc,
    unfavoriteArticleFunc,
  } = props;

  const history = useHistory();

  const toArticlePage = (evt) => {
    evt.preventDefault();
    history.push(`${process.env.PUBLIC_URL}/articles/${slug}`);
  };

  const handleLikeArticle = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (favorited) {
      unfavoriteArticleFunc(slug);
    } else {
      favoriteArticleFunc(slug);
    }
  };

  let likeBtnState = 'LikeButton';

  if (favorited) {
    likeBtnState = 'LikeButton LikeButton__Liked';
  }
  // const { username } = props.article.author;
  return (
    <div
      className="ArticlePreview"
      onClick={toArticlePage}
      onKeyDown={toArticlePage}
      role="button"
      tabIndex="0"
    >
      <div className="ArticlePreview-AuthorDateLikesRow">
        <div className="AuthorDate">
          <span className="Author">{username}</span>
          <span className="Date">{new Date(createdAt).toDateString()}</span>
        </div>
        <div className="Likes">
          <button className={likeBtnState} type="button" onClick={handleLikeArticle}>
            <LikeTwoTone />
            {favoritesCount}
          </button>
        </div>
      </div>
      <div className="ArticlePreview-HeaderDescriptionRow">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className="ArticlePreview-TagsRow">
        <ul className="TagList">
          {tagList.map((tag) => (
            <li className="TagList-Item" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
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

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagList: PropTypes.array.isRequired,
    favorited: PropTypes.bool.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({ username: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  favoriteArticleFunc: PropTypes.func.isRequired,
  unfavoriteArticleFunc: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ArticlePreview);
