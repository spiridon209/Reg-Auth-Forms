import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.scss';
import routesPaths from '../../routesPaths';

const Navigation = (props) => {
  const { isLogIn } = props;

  const notAuthLinks = (
    <nav className="Navigation">
      <NavLink exact className="Navigation-Link" to={routesPaths.getHome()}>
        Home page
      </NavLink>
      <NavLink className="Navigation-Link" to={routesPaths.getAuth()}>
        Log in
      </NavLink>
      <NavLink className="Navigation-Link" to={routesPaths.getReg()}>
        Signup
      </NavLink>
    </nav>
  );

  const authLinks = (
    <nav className="Navigation">
      <NavLink className="Navigation-Link" to={routesPaths.getHome()} exact>
        Home page
      </NavLink>
      <NavLink className="Navigation-Link" to={routesPaths.getCreateArticle()}>
        Create article
      </NavLink>
    </nav>
  );

  return isLogIn ? authLinks : notAuthLinks;
};

Navigation.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
};

export default Navigation;
