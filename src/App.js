import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin'>
          <h1>sign in page</h1>
        </Route>
        <Route path='/signup'>
          <h1>sign up page</h1>
        </Route>
        <Route path='/browse'>
          <h1>browse page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
