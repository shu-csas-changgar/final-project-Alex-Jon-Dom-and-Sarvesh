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
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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