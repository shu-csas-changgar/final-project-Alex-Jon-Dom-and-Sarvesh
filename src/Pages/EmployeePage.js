import React, { Component } from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import AdminFormAssignEqu from './Forms/AdminFormAssignEqu'
import AdminFormDelSearchEqu from './Forms/AdminFormDelSearchEqu'


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
    <Navbar expand="lg" fixed="bottom">
      <Navbar.Brand href="/help">Help</Navbar.Brand>
      <Navbar.Brand position="right">Address: 400 South Orange Ave, South Orange, NJ 07079</Navbar.Brand>
      <Navbar.Brand position="right">Contact: (973) 761-9000</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  </Styles>

)

export default class EmployeePage extends Component {

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
              <Navbar.Brand href="/">ABC Group</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>Signed in as: Alexander Varghese&nbsp;</Navbar.Text>
              </Navbar.Collapse>
              <Button href="/">Sign Out</Button>
            </Navbar>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Personal</Nav.Link>
                  <NavDropdown title="Equipment" id="basic-nav-dropdown">
                    <LinkContainer to="/assign-equipment">
                      <NavDropdown.Item>Assign Equipment</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/search-equipment">
                      <NavDropdown.Item>Search For Equipment</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <BottomNavigationBar />
          </Styles>
          <Route path="/assign-equipment" component={AdminFormAssignEqu} />
          <Route path="/search-equipment" component={AdminFormDelSearchEqu} />
        </Router>
      </React.Fragment>
    );
  }
}

