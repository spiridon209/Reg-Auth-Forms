import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = (props) => {
  const { isLogIn } = props;

  let links = (
    <nav className="Navigation">
      <NavLink exact className="Navigation-Link" to={`${process.env.PUBLIC_URL}/`}>
        Home page
      </NavLink>
      <NavLink className="Navigation-Link" to={`${process.env.PUBLIC_URL}/login`}>
        Log in
      </NavLink>
      <NavLink className="Navigation-Link" to={`${process.env.PUBLIC_URL}/signup`}>
        Signup
      </NavLink>
    </nav>
  );

  if (isLogIn) {
    links = (
      <nav className="Navigation">
        <NavLink className="Navigation-Link" to={`${process.env.PUBLIC_URL}/`} exact>
          Home page
        </NavLink>
        <NavLink className="Navigation-Link" to={`${process.env.PUBLIC_URL}/add`}>
          Create article
        </NavLink>
      </nav>
    );
  }

  return links;
};

// const mapStateToProps = (state) => {
//   return {
//     isLogIn: state.auth.isLogIn,
//   };
// };

Navigation.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
};

export default Navigation;
