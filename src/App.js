import React from 'react';
import { PrivateRoute } from './Components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './Helpers';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { About } from './Pages/About';
import { Registration } from './Pages/Registration';
import ForgotPassword from './Pages/ForgotPassword';


function App() {

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/about" component={About} />
                <Redirect from="*" to="/login" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
