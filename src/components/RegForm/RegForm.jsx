import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { auth } from "../../redux/actions/auth";
import { NavLink, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import formSchema from "./formSchema";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegForm = (props) => {
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

  const renderForm = (isAuth) => {
    if (isAuth) {
      return <Redirect to="/"></Redirect>;
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
                  "username",
                  "text",
                  "User Name",
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched
                )}
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
                  loading={props.isProcessing}
                  className="SubmitBtn Btn"
                  type="primary"
                  htmlType="submit"
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
          <NavLink to="/login">Log in</NavLink>
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
    serverErrors: state.auth.errors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password, isLogIn, username) =>
    dispatch(auth(email, password, isLogIn, username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
