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
import Layout from './hoc/Layout/Layout';
import Article from './components/Article/Article';
import ArticleList from './components/ArticleList/ArticleList';
import Navigation from './components/Navigation/Navigation';
import ArticleEditor from './components/ArticleEditor/ArticleEditor';

function App(props) {
  const { isAuth, autoLogInFunc } = props;

  useEffect(() => {
    autoLogInFunc();
  });

  let routes = (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={ArticleList} />
        <Route path={`${process.env.PUBLIC_URL}/articles/:slug`} component={Article} />
        <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={RegForm} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={AuthForm} />
        <Route exact path={`${process.env.PUBLIC_URL}/add`} component={CreateArticle} />
        <Redirect to={`${process.env.PUBLIC_URL}/`} />
      </Switch>
    </div>
  );

  if (isAuth) {
    routes = (
      <div className="App">
        <Navigation />
        <UserBio />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ArticleList} />
          <Route exact path={`${process.env.PUBLIC_URL}/articles/:slug`} component={Article} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/articles/:slug/edit`}
            component={ArticleEditor}
          />
          <Route exact path={`${process.env.PUBLIC_URL}/add`} component={CreateArticle} />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Switch>
      </div>
    );
  }

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
