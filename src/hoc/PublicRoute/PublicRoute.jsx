import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routesPaths from '../../routesPaths';

const PublicRoute = ({ component: Component, isLogin, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? <Redirect to={routesPaths.getHome()} /> : <Component {...props} />
      }
    />
  );
};

PublicRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  restricted: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PublicRoute;
