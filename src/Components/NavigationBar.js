import React from 'react';
import { Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link, .form-label {
    color: #C0C0C0;
    
    &:hover {
      color: white;
    }
  }
  .form-inline > * {
    margin:5px 3px;
 }
`

export const NavigationBar = () => (    
  <Styles>
    <Navbar expand="lg">
    <Navbar.Brand href="/">ABC Group</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Form inline>
          <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={1000} >Email:&nbsp;</Form.Label>
            <Col sm={15}>
              <Form.Control size="sm" type="email" placeholder="Enter your email"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={1000}>Password:&nbsp;</Form.Label>
            <Col sm={15}>
              <Form.Control size="sm" type="text" placeholder="Enter your password"/>
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" href="/adminpage">Submit</Button>
        </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)