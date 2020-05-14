import React from 'react';
import { connect } from 'react-redux';
import './CreateArticle.scss';
import { Formik, Form } from 'formik';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { createArticle } from '../../redux/actions/createArticle';
import createArticleSchema from './createArticleSchema';

const { TextArea } = Input;

const initialValues = { title: '', description: '', content: '', tags: '' };

const CreateArticle = (props) => {
  const { createArticleFunc, isProcessing } = props;
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
    <label className="CreateArticle-Label" htmlFor={name}>
      {`${label}`}
      <Component
        className="CreateArticle-Field"
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
        <div className="CreateArticle-RequredField">{errors[name]}</div>
      )}
    </label>
  );

  const renderForm = () => {
    return (
      <>
        <h1>New article</h1>
        <div className="CreateArticleWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={createArticleSchema}
            onSubmit={(values, actions) => {
              const { title, description, content, tags } = values;
              const tagList = tags === '' ? [] : tags.split(' ');
              createArticleFunc({ title, description, body: content, tagList });
              actions.resetForm();
            }}
          >
            {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
              <Form className="CreateArticleForm" onSubmit={handleSubmit}>
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
                  create article
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  };

  return renderForm();
};

const mapStateToProps = (state) => {
  return {
    isProcessing: state.createArticle.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createArticleFunc: (data) => dispatch(createArticle(data)),
});

CreateArticle.propTypes = {
  createAricleFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
