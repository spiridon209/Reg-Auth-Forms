import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { auth, resetErrors } from "../../redux/actions/auth";
// import formSchema from './formSchema';
import ServerErrors from "../ServerErrors/ServerErrors";

const initialValues = { email: "", password: "" };

const AuthForm = (props) => {
  const { isAuth, authFunc, resetErrorsFunc, isProcessing } = props;

  const renderInput = (
    name,
    type,
    label,
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  ) => (
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
        style={touched[name] && errors[name] ? { borderColor: "red" } : {}} //
      />
      {touched[name] && errors[name] && (
        <div className="Form-RequredField">{errors[name]}</div>
      )}
    </label>
  );

  const renderForm = () => {
    return (
      <>
        <h1>Login Page</h1>
        <div className="FormWrapper">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              const { email, password } = values;
              authFunc(email, password);
              if (isAuth) {
                actions.resetForm(initialValues);
              }
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
                  "email",
                  "email",
                  "Email",
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched
                )}
                {renderInput(
                  "password",
                  "password",
                  "Password",
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
                  Log in
                </Button>
                <ServerErrors />
              </Form>
            )}
          </Formik>
          <NavLink
            to={`${process.env.PUBLIC_URL}/signup`}
            onClick={resetErrorsFunc}
          >
            Signup
          </NavLink>
        </div>
      </>
    );
  };

  return renderForm();
};

const mapStateToProps = (state) => {
  return {
    isAuth: !!state.auth.token,
    isProcessing: state.auth.isProcessing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authFunc: (email, password) => dispatch(auth(email, password)),
  resetErrorsFunc: () => dispatch(resetErrors()),
});

AuthForm.propTypes = {
  authFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
  resetErrorsFunc: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
