import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegForm from './components/RegForm/RegForm';
import AuthForm from './components/AuthForm/AuthForm';
import UserBio from './components/UserBio/UserBio';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/signup`} component={RegForm} />
        <Route path={`${process.env.PUBLIC_URL}/login`} component={AuthForm} />
        <Route path={`${process.env.PUBLIC_URL}/`} component={UserBio} />
        <Redirect to={`${process.env.PUBLIC_URL}/`} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (props) => {
  const { user, token, email, isLogIn } = props;
  return {
    user,
    token,
    email,
    isLogIn,
  };
};

export default connect(mapStateToProps)(App);
