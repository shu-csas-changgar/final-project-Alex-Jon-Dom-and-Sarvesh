import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Employee from './EmployeePage';
import AddEmpl from '../Pages/Forms/AdminFormAddEmpl';
import DelEmpl from '../Pages/Forms/AdminFormDelEmpl';
import styled from 'styled-components';

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

class AdminPage extends Component {
    render ()  {
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
                      <Nav.Link>Personal</Nav.Link>
                      <NavDropdown title="Employee" id="basic-nav-dropdown">
                      <LinkContainer to="/add-employee">
                        <NavDropdown.Item>Add Employee</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/delete-employee">
                        <NavDropdown.Item>Delete Employee</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/update-employee">
                        <NavDropdown.Item>Update Employee</NavDropdown.Item>
                      </LinkContainer>
                        <NavDropdown.Item>Search For Employee</NavDropdown.Item>
                      </NavDropdown>
                        <NavDropdown title="Equipment" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/employee">Add Equipment</NavDropdown.Item>
                        <NavDropdown.Item href="/">Delete Equipment</NavDropdown.Item>
                        <NavDropdown.Item href="/">Assign Equipment</NavDropdown.Item>
                        <NavDropdown.Item href="/">Search For Equipment</NavDropdown.Item>
                      </NavDropdown>
                        <NavDropdown title="Vendor" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Add Vendor</NavDropdown.Item>
                        <NavDropdown.Item href="/">Delete Vendor</NavDropdown.Item>
                        <NavDropdown.Item href="/">Update Vendor</NavDropdown.Item>
                        <NavDropdown.Item href="/">Search For Vendor</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <BottomNavigationBar />
              </Styles>
              <Route path="/add-employee" component={AddEmpl} />
              <Route path="/delete-employee" component={DelEmpl} />
              <Route path="/employee" component={Employee} />
              </Router>
          </React.Fragment>
        );
    }
}


export default AdminPage;