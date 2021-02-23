import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import User from './screens/user';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
