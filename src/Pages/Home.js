import React, { Component } from 'react';
import { NavigationBar } from '../Components/NavigationBar';
import { Jumbotron } from '../Components/Jumbotron';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
    margin-bottom:0;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #C0C0C0;
    
    &:hover {
      color: white;
    }
  }
  * {font-size: 15px;}
 `

 export const BottomNavigationBar = () => (
    <Styles>
      <Navbar expand="lg">
      <Navbar.Brand href="/about">About</Navbar.Brand>
      <Navbar.Brand>Address: 400 South Orange Ave, South Orange, NJ 07079</Navbar.Brand>  
      <Navbar.Brand position="right">Contact: (973) 761-9000</Navbar.Brand>     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </Styles>
  )


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