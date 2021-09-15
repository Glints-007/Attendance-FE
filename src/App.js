import React, { useState } from 'react';
import { PrivateRoute } from './Components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './Helpers';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { About } from './Pages/About';


function App() {

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/about" component={About} />
                <Redirect from="*" to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
