import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const {
    authUser
  } = props;


  let noMatchUrl = "";
  if (authUser) {
    noMatchUrl = "/home";
  }
  else {
    noMatchUrl = "/signin";
  }

  return (
    <Router>
    <div>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route render={() => {
        return <Redirect
                  to={
                    [
                      "/home",
                    ].indexOf(noMatchUrl) === -1
                      ? "/home"
                      : noMatchUrl}
                />;
      }} />
    </div>
  </Router>
  )
}

export default withAuthentication(App);
