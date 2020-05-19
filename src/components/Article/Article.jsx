import React from 'react';
import './Article.scss';
import { LikeTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoriteArticle, unfavoriteArticle } from '../../redux/actions/getArticles';

const Article = (props) => {
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

  const handleLikeArticle = (evt) => {
    evt.preventDefault();
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
    <div className="Article">
      <div className="Article-AuthorDateLikesRow">
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
      <div className="Article-HeaderDescriptionRow">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className="Article-TagsRow">
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

Article.propTypes = {
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

export default connect(null, mapDispatchToProps)(Article);
