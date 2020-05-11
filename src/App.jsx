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
        <Route path="Reg-Auth-Forms/signup" component={RegForm} />
        <Route path="Reg-Auth-Forms/login" component={AuthForm} />
        <Route path="Reg-Auth-Forms/" component={UserBio} />
        <Redirect to="Reg-Auth-Forms/" />
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
