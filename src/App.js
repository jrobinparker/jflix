import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP}>
          <h1>sign up page</h1>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <h1>browse page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
