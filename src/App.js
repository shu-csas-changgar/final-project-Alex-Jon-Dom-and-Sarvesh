import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { NoMatch } from './Pages/NoMatch';
import AdminPage from './Pages/AdminPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/adminpage" component={AdminPage} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
