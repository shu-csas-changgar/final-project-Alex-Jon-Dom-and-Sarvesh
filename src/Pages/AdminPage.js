import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link, .navbar-text, .form-label {
    color: #C0C0C0;
    
    &:hover {
      color: white;
    }
  }
`

export const AdminNavigation = () => ( 
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
        <NavDropdown title="Employee" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Add Employee</NavDropdown.Item>
          <NavDropdown.Item href="/">Delete Employee</NavDropdown.Item>
          <NavDropdown.Item href="/">Update Employee</NavDropdown.Item>
          <NavDropdown.Item href="/">Search For Employee</NavDropdown.Item>
        </NavDropdown>
          <NavDropdown title="Equipment" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Add Equipment</NavDropdown.Item>
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
</Styles>
)

class AdminPage extends Component {
    render ()  {
        return (
          <React.Fragment>
            <AdminNavigation />
          </React.Fragment>
        );
    }
}


export default AdminPage; 