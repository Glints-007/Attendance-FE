import React from 'react';
import { PrivateRoute } from './Components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './Helpers';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { About } from './Pages/About';
import { Registration } from './Pages/Registration';
import { ForgotPassword } from './Pages/ForgotPassword';
import { ResetPassword } from './Pages/ResetPassword';
import Admin from './Pages/Admin';

function App() {

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
                <Route exact path="/login">
                  {localStorage.getItem('user') ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <Route path="/logout" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/reset-password" component={ResetPassword} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/about" component={About} />
                <Redirect from="*" to="/login" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
