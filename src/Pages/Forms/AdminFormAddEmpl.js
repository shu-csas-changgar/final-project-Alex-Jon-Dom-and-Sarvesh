import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Button, Col } from 'react-bootstrap';
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
  * {font-size: 15px;}
`




class AdminFormAddEmpl extends Component {
    render ()  {
        return (
          "Add Employee"
        );
    }
}


export default AdminFormAddEmpl; 