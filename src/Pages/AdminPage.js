import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Employee from './EmployeePage';
import styled from 'styled-components';
import AdminFormAddEmpl from './Forms/AdminFormAddEmpl'
import AdminFormRestEmpl from './Forms/AdminFormRestEmpl'
import AdminFormAddEqu from './Forms/AdminFormAddEqu'
import AdminFormAssignEqu from './Forms/AdminFormAssignEqu'
import AdminFormDelSearchEqu from './Forms/AdminFormDelSearchEqu'
import AdminFormDelSearchVen from './Forms/AdminFormDelSearchVen'
import AdminFormAddVen from './Forms/AdminFormAddVen'


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

export default class AdminPage extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log("Comp got: ", fields);
  };

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
                      <LinkContainer to="/adminpage/add-employee">
                        <NavDropdown.Item>Add Employee</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/delete-employee">
                        <NavDropdown.Item>Delete Employee</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/update-employee">
                        <NavDropdown.Item>Update Employee</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/search-employee">
                        <NavDropdown.Item>Search For Employee</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>
                      <NavDropdown title="Equipment" id="basic-nav-dropdown">
                      <LinkContainer to="/adminpage/add-equipment">
                        <NavDropdown.Item>Add Equipment</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/delete-equipment">
                        <NavDropdown.Item>Delete Equipment</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/assign-equipment">
                        <NavDropdown.Item>Assign Equipment</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/search-equipment">
                        <NavDropdown.Item>Search For Equipment</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>
                      <NavDropdown title="Vendor" id="basic-nav-dropdown">
                      <LinkContainer to="/adminpage/add-vendor">
                        <NavDropdown.Item>Add Vendor</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/delete-vendor">
                         <NavDropdown.Item>Delete Vendor</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/adminpage/search-vendor">
                      <NavDropdown.Item>Search For Vendor</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </Styles>
              <Route path="/adminpage/add-employee" component={AdminFormAddEmpl} />
              <Route path="/adminpage/delete-employee" component={AdminFormRestEmpl}/>
              <Route path="/adminpage/search-employee" component={AdminFormRestEmpl}/>
              <Route path="/adminpage/update-employee" component={AdminFormRestEmpl}/>
              <Route path="/adminpage/add-equipment" component={AdminFormAddEqu} />
              <Route path="/adminpage/delete-equipment" component={AdminFormDelSearchEqu}/>
              <Route path="/adminpage/assign-equipment" component={AdminFormAssignEqu}/>
              <Route path="/adminpage/search-equipment" component={AdminFormDelSearchEqu}/>
              <Route path="/adminpage/add-vendor" component={AdminFormAddVen}/>
              <Route path="/adminpage/delete-vendor" component={AdminFormDelSearchVen}/>
              <Route path="/adminpage/search-vendor" component={AdminFormDelSearchVen}/>
              <Route path="/adminpage/employee" component={Employee} />
              </Router>
              <BottomNavigationBar />
          </React.Fragment>
        );
    }
}


export default AdminPage;
