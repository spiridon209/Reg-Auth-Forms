import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { auth, logOut } from '../../redux/actions/auth';
import formSchema from './formSchema';
import ServerErrors from '../ServerErrors/ServerErrors';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const RegForm = (props) => {
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

  const renderForm = (isAuth) => {
    if (isAuth) {
      return <Redirect to="/" />;
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
              props.auth(email, password, false, username);
              actions.resetForm(initialValues);
            }}
          >
            {({
              values,
              isSubmitting,
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
                  loading={props.isProcessing}
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
          <NavLink to="/login" onClick={props.logOut}>
            Log in
          </NavLink>
        </div>
      </>
    );
  };

  return renderForm(props.isAuth);
};

const mapStateToProps = (state) => {
  return {
    isAuth: !!state.auth.token,
    isProcessing: state.auth.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password, isLogIn, username) => dispatch(auth(email, password, isLogIn, username)),
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
