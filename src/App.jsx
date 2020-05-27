import './App.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegForm from './components/RegForm/RegForm';
import AuthForm from './components/AuthForm/AuthForm';
import UserBio from './components/UserBio/UserBio';
import CreateArticle from './components/CreateArticle/CreateArticle';
import { autoLogIn } from './redux/actions/auth';
import Layout from './hoc/Layout/Layout';
import Article from './components/Article/Article';
import ArticleList from './components/ArticleList/ArticleList';
import Navigation from './components/Navigation/Navigation';
import ArticleEditor from './components/ArticleEditor/ArticleEditor';
import routesPaths from './routesPaths';
import PublicRoute from './hoc/PublicRoute/PublicRoute';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';

function App(props) {
  const { isAuth, autoLogInFunc } = props;

  useEffect(() => {
    autoLogInFunc();
  });

  const routes = (
    <div className="App">
      <Navigation isLogIn={isAuth} />
      <UserBio isLogin={isAuth} />
      <Switch>
        <PublicRoute
          exact
          path={routesPaths.getHome()}
          isLogin={isAuth}
          restricted={false}
          component={ArticleList}
        />
        <PublicRoute
          exact
          path={routesPaths.getArticle()}
          isLogin={isAuth}
          restricted={false}
          component={Article}
        />
        <PublicRoute
          exact
          path={routesPaths.getReg()}
          isLogin={isAuth}
          restricted
          component={RegForm}
        />
        <PublicRoute
          exact
          path={routesPaths.getAuth()}
          isLogin={isAuth}
          restricted
          component={AuthForm}
        />
        <PrivateRoute
          exact
          path={routesPaths.getArticleEditor()}
          isLogin={isAuth}
          component={ArticleEditor}
        />
        <PrivateRoute
          exact
          path={routesPaths.getCreateArticle()}
          isLogin={isAuth}
          component={CreateArticle}
        />

        <Redirect to={routesPaths.getHome()} />
      </Switch>
    </div>
  );

  return <Layout>{routes}</Layout>;
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
