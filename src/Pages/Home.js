import React, { Component } from 'react';
import { NavigationBar } from '../Components/NavigationBar';
import { Jumbotron } from '../Components/Jumbotron';
import { BottomNavigationBar } from '../Components/BottomNavigationBar';


class Home extends Component {
  render()  {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <BottomNavigationBar />
      </React.Fragment>
    );
  }
}

export default Home;