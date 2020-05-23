import React, { useState, useEffect } from 'react';
import './ArticleEditor.scss';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import updateArticleSchema from './updateArticleSchema';
import getArticleFetch from '../../api/getArticle';
import { updateArticle } from '../../redux/actions/updateArticle';

const { TextArea } = Input;

const ArticleEditor = (props) => {
  const {
    match: {
      params: { slug },
    },
    updateArticleFunc,
    isProcessing,
  } = props;

  const [article, setArticle] = useState(null);
  const [response, setResponse] = useState('');
  const history = useHistory();

  useEffect(() => {
    getArticleFetch(slug)
      .then((answer) => answer.data)
      .then((data) => data.article)
      .then((updatedArticle) => setArticle(() => updatedArticle));
  }, [slug]);

  if (article === null) {
    return <div>Article is loading...</div>;
  }

  const renderInput = (
    name,
    type,
    label,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    Component
  ) => (
    <label className="ArticleEditor-Label" htmlFor={name}>
      {`${label}`}
      <Component
        className="ArticleEditor-Field"
        type={type}
        name={name}
        placeholder={label}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        style={touched[name] && errors[name] ? { borderColor: 'red' } : {}} //
      />
      {touched[name] && errors[name] && (
        <div className="ArticleEditor-RequiredField">{errors[name]}</div>
      )}
    </label>
  );

  const initialValues = {
    title: article.title,
    description: article.description,
    content: article.body,
    tags: article.tagList.length > 0 ? article.tagList.join(', ') : '',
  };

  const renderForm = () => {
    return (
      <div className="ArticleEditor">
        <h1>Update article</h1>
        <div className="ArticleEditor-FormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={updateArticleSchema}
            onSubmit={(values) => {
              const { title, description, content, tags } = values;
              const tagList = tags === '' ? [] : tags.split(',');
              try {
                updateArticleFunc(
                  { title, description, body: content, tagList },
                  article.slug
                ).then((updatedArticle) => {
                  history.push(`${process.env.PUBLIC_URL}/articles/${updatedArticle.slug}`);
                });
              } catch (err) {
                setResponse(() => `Somthing going wrong: ${err}`);
              }
            }}
          >
            {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
              <Form className="ArticleEditor-Form" onSubmit={handleSubmit}>
                {renderInput(
                  'title',
                  'text',
                  'Title',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  Input
                )}
                {renderInput(
                  'description',
                  'text',
                  'Description',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  Input
                )}
                {renderInput(
                  'content',
                  'text',
                  'Article content',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  TextArea
                )}
                {renderInput(
                  'tags',
                  'text',
                  'Tags',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  Input
                )}
                <Button
                  loading={isProcessing}
                  className="SubmitBtn Btn"
                  type="primary"
                  htmlType="submit"
                >
                  Update article
                </Button>
              </Form>
            )}
          </Formik>
          <div className="ArticleEditor-Response">{response}</div>
        </div>
      </div>
    );
  };

  return renderForm();
};

const mapStateToProps = (state) => {
  return {
    isProcessing: state.updateArticle.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateArticleFunc: (data, slug) => dispatch(updateArticle(data, slug)),
});

ArticleEditor.propTypes = {
  updateAricleFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
  response: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleEditor));
