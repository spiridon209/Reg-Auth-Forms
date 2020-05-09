import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import { auth, logOut } from "../../redux/actions/auth";
import { Formik, Form } from "formik";
import formSchema from "./formSchema";
import ServerErrors from "../ServerErrors/ServerErrors";

const initialValues = { email: "", password: "" };

const AuthForm = (props) => {
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
        <h1>Login Page</h1>
        <div className="FormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              const { email, password } = values;
              props.auth(email, password, true);
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
                  Log in
                </Button>
                <ServerErrors />
              </Form>
            )}
          </Formik>
          <NavLink to="/signup" onClick={props.logOut}>
            Signup
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
  auth: (email, password, isLogIn) => dispatch(auth(email, password, isLogIn)),
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
