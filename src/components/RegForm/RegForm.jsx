import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { auth, logOut } from '../../redux/actions/auth';
import formSchema from './formSchema';
import ServerErrors from '../ServerErrors/ServerErrors';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const RegForm = (props) => {
  const { isAuth, authFunc, logOutFunc, isProcessing } = props;

  const renderInput = (name, type, label, values, handleChange, handleBlur, errors, touched) => (
    <label className="Form-Label" htmlFor={name}>
      {`${label}`}
      <Input
        className="Form-Field"
        type={type}
        name={name}
        placeholder={label}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        style={touched[name] && errors[name] ? { borderColor: 'red' } : {}} //
      />
      {touched[name] && errors[name] && <div className="Form-RequredField">{errors[name]}</div>}
    </label>
  );

  const renderForm = (userState) => {
    if (userState) {
      return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
    }
    return (
      <>
        <h1>Signup Page</h1>
        <div className="FormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              const { email, password, username } = values;
              authFunc(email, password, false, username);
              actions.resetForm(initialValues);
            }}
          >
            {({
              values,

              handleChange,
              errors,
              touched,
              handleBlur,
              handleSubmit,
            }) => (
              <Form className="Form" onSubmit={handleSubmit}>
                {renderInput(
                  'username',
                  'text',
                  'User Name',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched
                )}
                {renderInput(
                  'email',
                  'email',
                  'Email',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched
                )}
                {renderInput(
                  'password',
                  'password',
                  'Password',
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched
                )}
                <Button
                  loading={isProcessing}
                  className="SubmitBtn Btn"
                  type="primary"
                  htmlType="submit"
                >
                  Sign up
                </Button>
                <ServerErrors />
              </Form>
            )}
          </Formik>
          <NavLink to={`${process.env.PUBLIC_URL}/login`} onClick={logOutFunc}>
            Log in
          </NavLink>
        </div>
      </>
    );
  };

  return renderForm(isAuth);
};

const mapStateToProps = (state) => {
  return {
    isAuth: !!state.auth.token,
    isProcessing: state.auth.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authFunc: (email, password, isLogIn, username) =>
    dispatch(auth(email, password, isLogIn, username)),
  logOutFunc: () => dispatch(logOut()),
});

RegForm.propTypes = {
  authFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
  logOutFunc: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
