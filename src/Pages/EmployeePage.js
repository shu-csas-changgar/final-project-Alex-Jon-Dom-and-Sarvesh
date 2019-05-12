import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import EmployeeFormHome from './Forms/EmployeeFormHome'
import EmployeePersonal from './Forms/EmployeePersonalPage'

const Styles = styled.div`
.navbar {
  background-color: #222;
  margin-bottom:0;
}
.navbar-brand, .navbar-nav .nav-link, .navbar-text {
  color: #C0C0C0;
  &:hover {
    color: white;
  }
}
* {font-size: 15px;}
`

export const BottomNavigationBar = () => (
  <Styles>
    <Navbar expand="lg" sticky="bottom">
      <Navbar.Brand href="/help">Help</Navbar.Brand>
      <Navbar.Brand position="right">Address: 400 South Orange Ave, South Orange, NJ 07079</Navbar.Brand>
      <Navbar.Brand position="right">Contact: (973) 761-9000</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  </Styles>

)

export default class EmployeePage extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Styles>
            <Navbar>
              <LinkContainer to="/employee">
                <Navbar.Brand>ABC Group</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>&nbsp;</Navbar.Text>
              </Navbar.Collapse>
              <Button href="/">Sign Out</Button>
            </Navbar>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
          </Styles>
          <Route exact path="/employee" employee={this.props.employee} component={EmployeeFormHome} />
          <Route path="/employee/personal" employee={this.props.employee} component={EmployeePersonal} />
        </Router>
        <BottomNavigationBar />
      </React.Fragment>
    );
  }
}
