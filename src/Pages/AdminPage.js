import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Employee from './EmployeePage';
import styled from 'styled-components';
import AdminFormAddEmpl from './Forms/AdminFormAddEmpl'
import AdminFormAddEqu from './Forms/AdminFormAddEqu'
import AdminFormAddVen from './Forms/AdminFormAddVen'
import AdminFormHome from './Forms/AdminFormHome'


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
      <Navbar.Brand position="right">Address: 400 South Orange Ave, South Orange, NJ 07079</Navbar.Brand>
      <Navbar.Brand position="right">Contact: (973) 761-9000</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  </Styles>

)

export default class AdminPage extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log("Comp got: ", fields);
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Styles>
            <Navbar>
              <LinkContainer to="/adminpage">
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
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <LinkContainer to="/adminpage/add-employee">
                    <Nav.Link>Add Employee</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/adminpage/add-equipment">
                    <Nav.Link>Add Equipment</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/adminpage/add-vendor">
                    <Nav.Link>Add Vendor</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Styles>
          <Route exact path="/adminpage" component={AdminFormHome} />
          <Route path="/adminpage/add-employee" component={AdminFormAddEmpl} />
          <Route path="/adminpage/add-equipment" component={AdminFormAddEqu} />
          <Route path="/adminpage/add-vendor" component={AdminFormAddVen} />
          <Route path="/adminpage/employee" component={Employee} />
        </Router>
        <BottomNavigationBar />
      </React.Fragment>
    );
  }
}
