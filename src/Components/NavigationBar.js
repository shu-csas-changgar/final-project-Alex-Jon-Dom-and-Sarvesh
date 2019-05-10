import React, { Component } from 'react';
import { Navbar, Nav, Form, Col, Row, Button } from 'react-bootstrap';
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

class NavigationBar extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.target.className += " was-validated"
        this.state.email.length > 0 && this.state.password.length ? this.sendData() : console.log("Fields not complete")
    }

    sendData = () => {
        fetch('userlogin', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
        .then( res => res.json())
        .then( data => {
          if (data === "INVALID") {
            // Sent the state's message
            console.log(data)
            this.setState({message: "Username or password is incorrect"})
          }
          else{
            // Set the global state to true
            console.log(data)
            this.props.action()
            this.props.history.push('/adminpage')
          }
        })
        .catch((error) =>{
          this.setState({message: "Unable to connect to the server at this time"})
        })
      }

    handleEmailChange(event)   {
        this.setState({
            email: event.target.value
        })
    }

    handlePassChange(event)   {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">ABC Group</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Form inline onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={1000} name="email" >Email:&nbsp;</Form.Label>
                                    <Col sm={15}>
                                        <Form.Control onChange={this.handleEmailChange.bind(this)} value={this.state.email} size="sm" type="email" placeholder="Enter your email" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Form.Label column sm={1000}>Password:&nbsp;</Form.Label>
                                    <Col sm={15}>
                                        <Form.Control onChange={this.handlePassChange.bind(this)} value={this.state.password} size="sm" type="text" placeholder="Enter your password" />
                                    </Col>
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

export default NavigationBar;
