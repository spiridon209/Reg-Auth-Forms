import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { logOut } from '../../redux/actions/auth';

import './UserBio.scss';

const UserBio = (props) => {
  const { username, isAuth, logOutFunc } = props;

  const logOutHandler = () => {
    logOutFunc();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
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
          <div className="UserBioWrap-LinkToCreateArticle">
            <NavLink to={`${process.env.PUBLIC_URL}/add`}>Create article</NavLink>
          </div>
        </div>
      </>
    );
  };

  return isAuth ? renderUserBio() : <Redirect to={`${process.env.PUBLIC_URL}/login`} />;
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuth: !!state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logOutFunc: () => dispatch(logOut()) };
};

UserBio.propTypes = {
  username: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  logOutFunc: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserBio);
