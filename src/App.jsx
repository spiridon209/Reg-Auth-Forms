import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegForm from './components/RegForm/RegForm';
import AuthForm from './components/AuthForm/AuthForm';
import UserBio from './components/UserBio/UserBio';

function App(props) {
  const { isAuth } = props;

  if (isAuth) {
    return (
      <div className="App">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={UserBio} />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Switch>
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={RegForm} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={AuthForm} />
        <Redirect to={`${process.env.PUBLIC_URL}/login`} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: !!state.auth.token,
  };
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
