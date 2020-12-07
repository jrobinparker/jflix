import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.BROWSE} component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
