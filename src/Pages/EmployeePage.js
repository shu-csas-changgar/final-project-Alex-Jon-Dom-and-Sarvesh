import React, { Component } from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
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

export const EmployeeNavigation = () => (
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
          <NavDropdown.Item href="/">Assign Equipment</NavDropdown.Item>
          <NavDropdown.Item href="/">Search For Equipment</NavDropdown.Item>
        </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Styles>
)

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

class EmployeePage extends Component {
    render ()  {
        return (
          <React.Fragment>
            <EmployeeNavigation />
            <BottomNavigationBar />
          </React.Fragment>
        );
    }
}

export default EmployeePage;