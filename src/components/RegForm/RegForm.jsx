import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { reg, resetErrors } from "../../redux/actions/auth";
import formSchema from "./formSchema";
import ServerErrors from "../ServerErrors/ServerErrors";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegForm = (props) => {
  const { isAuth, regFunc, resetErrorsFunc, isProcessing } = props;

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
        <h1>Signup Page</h1>
        <div className="FormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              const { email, password, username } = values;
              regFunc(email, password, username);
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
          <NavLink
            to={`${process.env.PUBLIC_URL}/login`}
            onClick={resetErrorsFunc}
          >
            Log in
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
  regFunc: (email, password, username) =>
    dispatch(reg(email, password, username)),
  resetErrorsFunc: () => dispatch(resetErrors()),
});

RegForm.propTypes = {
  regFunc: PropTypes.func,
  isProcessing: PropTypes.bool,
  resetErrorsFunc: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
