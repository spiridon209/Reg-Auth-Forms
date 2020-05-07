import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { auth } from "../../redux/actions/auth";
import { NavLink, Redirect } from "react-router-dom";

const defaultState = {
  username: "",
  email: "",
  password: "",
};

const RegForm = (props) => {
  const [fieldsData, setFieldsData] = useState(defaultState);

  const changeHandler = (fieldname) => (evt) => {
    const { value } = evt.target;
    setFieldsData({ ...fieldsData, [fieldname]: value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const { email, password, username } = fieldsData;
    props.auth(email, password, false, username);
    setFieldsData(defaultState);
  };

  const rendered = (isAuth) => {
    if (isAuth) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="FormWrapper">
        <form className="Form" onSubmit={submitHandler}>
          <fieldset className="Form-Group">
            <Input
              className="Form-Field"
              type="text"
              placeholder="Username"
              value={fieldsData.name}
              onChange={changeHandler("username")}
            />

            <Input
              className="Form-Field"
              type="email"
              placeholder="Email"
              value={fieldsData.email}
              onChange={changeHandler("email")}
            />

            <Input
              className="Form-Field"
              type="password"
              placeholder="Password"
              value={fieldsData.password}
              onChange={changeHandler("password")}
            />

            <Button className="SubmitBtn" type="primary" htmlType="submit">
              Sign up
            </Button>
          </fieldset>
        </form>
        <NavLink to="/login">Log in</NavLink>
      </div>
    );
  };

  return rendered(props.isAuth);
};

const mapStateToProps = (state) => {
  return { isAuth: !!state.auth.token };
};

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password, isLogIn, username) =>
    dispatch(auth(email, password, isLogIn, username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
