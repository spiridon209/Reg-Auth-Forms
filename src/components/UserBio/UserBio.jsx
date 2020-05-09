import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import { logOut } from "../../redux/actions/auth";

const UserBio = (props) => {
  const { username, isAuth } = props;

  const logOutHandler = () => {
    const { logOut } = props;

    logOut();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  const renderUserBio = () => {
    return (
      <>
        <h1>Home Page</h1>
        <div className="UserBioWrap">
          <div className="UserBio">{username}</div>
          <Button className="Btn" type="primary" onClick={logOutHandler}>
            Log out
          </Button>
        </div>
      </>
    );
  };

  return isAuth ? renderUserBio() : <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuth: !!state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logOut()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserBio);
