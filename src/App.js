import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import DashBoard from './components/DashBoard/DashBoard';
import { history } from './helpers/history';


class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      const { alert } = this.props;
      return (
          <div className="jumbotron">
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      <Router history={history}>
                          <Switch>
                              <Route path="/login" component={LoginForm} />
                              <Route exact path="/dashboard" component={DashBoard} />
                              <Redirect from="*" to="/login" />
                          </Switch>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
