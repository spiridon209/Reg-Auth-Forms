import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routesPaths from '../../routesPaths';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to / page
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to={routesPaths.getHome()} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
