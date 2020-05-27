import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { logOut } from '../../redux/actions/auth';
import './UserBio.scss';

const UserBio = (props) => {
  const { username, logOutFunc, isLogin } = props;

  const logOutHandler = () => {
    logOutFunc();
  };

  const renderUserBio = () => {
    return (
      <div className="UserBioWrap">
        <div className="UserBio">{username}</div>
        <Button className="Btn" type="primary" onClick={logOutHandler}>
          Log out
        </Button>
      </div>
    );
  };

  return isLogin ? renderUserBio() : null;
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logOutFunc: () => dispatch(logOut()) };
};

UserBio.propTypes = {
  username: PropTypes.string.isRequired,
  logOutFunc: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserBio);
