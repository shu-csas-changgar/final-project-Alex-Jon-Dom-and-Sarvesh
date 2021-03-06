import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { NoMatch } from './Pages/NoMatch';
import  { ProtectedRoute } from './ProtectedRoute';
import EmployeePage from './Pages/EmployeePage';
import AdminPage from './Pages/AdminPage';



class App extends Component {

constructor()  {
  super()

  this.state={
    LoggedIn: false,
    isAdmin: false,
    isEmployee: false,
    employee: ''
  }
  this.handler = this.handler.bind(this)
}

handler()   {
  this.setState ({
    LoggedIn: true
  })
}

  render() {
    console.log(this.state.LoggedIn)
    return (
      <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} action={this.handler} />}/>
              <ProtectedRoute exact path = "/adminpage" component = {AdminPage} Logged={this.state.LoggedIn} />
              <ProtectedRoute exact path = "/employee" component = {EmployeePage} Logged={this.state.LoggedIn} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
