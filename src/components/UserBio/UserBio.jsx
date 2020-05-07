import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Row, Col } from "antd";
import { logOut } from "../../redux/actions/auth";

const UserBio = (props) => {
  const { username, isAuth } = props;

  const logOutHandler = () => {
    const { logOut } = props;
    console.log(logOut);
    logOut();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  const renderUserBio = () => {
    return (
      <Row>
        <Col span={12} offset={6}>
          <div className="UserBio">{username}</div>
          <Button type="primary" onClick={logOutHandler}>
            Log out
          </Button>
        </Col>
      </Row>
    );
  };

  return isAuth ? renderUserBio() : <Redirect to="/login" />; // make Log out Button
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
