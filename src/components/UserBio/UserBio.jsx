import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const UserBio = (props) => {
  const { username, isAuth } = props;
  return isAuth ? <div>{username}</div> : <Redirect to="/login" />; // make Log out Button
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuth: !!state.auth.token,
  };
};
export default connect(mapStateToProps)(UserBio);
