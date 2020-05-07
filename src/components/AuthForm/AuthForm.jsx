import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { logIn } from "../../redux/actions";

const AuthForm = (props) => {
  const [fieldsData, setFieldsData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (fieldname) => (evt) => {
    const { value } = evt.target;
    setFieldsData({ ...fieldsData, [fieldname]: value });
  };

  const submitHandler = async (evt) => {
    evt.preventDefault();
    try {
      const req = await axios.post(
        "https://conduit.productionready.io/api/users/login",
        {
          user: fieldsData,
        }
      );
      const { username, email, token } = req.data.user;
      props.logIn(username, email, token);
    } catch (err) {
      console.log("Error", err.header);
    }
  };

  return (
    <div className="FormWrapper">
      <form className="Form" onSubmit={submitHandler}>
        <fieldset className="Form-Group">
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
            Log in
          </Button>
        </fieldset>
      </form>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
};

const mapStateToProps = (props) => {
  const { user, token, email, isLogIn } = props;
  return {
    user,
    token,
    email,
    isLogIn,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user, email, token) => dispatch(logIn(user, email, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
