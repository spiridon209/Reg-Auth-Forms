import './App.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegForm from './components/RegForm/RegForm';
import AuthForm from './components/AuthForm/AuthForm';
import UserBio from './components/UserBio/UserBio';
import CreateArticle from './components/CreateArticle/CreateArticle';
import { autoLogIn } from './redux/actions/auth';

function App(props) {
  const { isAuth, autoLogInFunc } = props;

  useEffect(() => {
    autoLogInFunc();
  });

  if (isAuth) {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={UserBio} />
          <Route exact path={`${process.env.PUBLIC_URL}/add`} component={CreateArticle} />
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

const mapDispatchToProps = (dispatch) => ({
  autoLogInFunc: () => dispatch(autoLogIn()),
});

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  autoLogInFunc: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
