import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { auth, logOut } from "../../redux/actions/auth";
import formSchema from "./formSchema";
import ServerErrors from "../ServerErrors/ServerErrors";

const initialValues = { email: "", password: "" };

const AuthForm = (props) => {
  const { isAuth, authFunc, logOutFunc, isProcessing } = props;

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

  const renderForm = (userState) => {
    if (userState) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <h1>Login Page</h1>
        <div className="FormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              const { email, password } = values;
              authFunc(email, password, true);
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
          <NavLink to="/signup" onClick={logOutFunc}>
            Signup
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
  authFunc: (email, password, isLogIn) =>
    dispatch(auth(email, password, isLogIn)),
  logOutFunc: () => dispatch(logOut()),
});

AuthForm.propTypes = {
  authFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
  logOutFunc: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
