import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";

const RegForm = () => {
  const [fieldsData, setFieldsData] = useState({
    username: "",
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
        "https://conduit.productionready.io/api/users",
        {
          user: fieldsData,
        }
      );
      console.log(req);
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

export default connect()(RegForm);
