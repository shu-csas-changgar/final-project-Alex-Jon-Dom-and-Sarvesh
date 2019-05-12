import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';

export default class AddEmpl extends React.Component {
  state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      role: '',
      officeLocation: '',
      floor: '',
      room: '',
      email: '',
      password: ''
  }

  change = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  sendData = () => {
      fetch('../../query/addempl', {
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
          this.setState({message: "Missing data"})
        }
        else{
          // Set the global state to true
          console.log(data)
          window.alert("The Employee has been Successfully Added!")
          this.props.history.push('/adminpage/addempl')
        }
      })
      .catch((error) =>{
        this.setState({message: "Unable to connect to the server at this time"})
      })
    }

  onSubmit = e => {
      e.preventDefault();
      console.log("Comp got: ", this.state);
      this.sendData();
  };


  render() {
      return (
        <Container style={{marginBottom: "50px", marginTop: "20px"}}>
        <Card style={{width: '50%', margin: '0 auto',}}>
          <Card.Header>Add Employee</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" value={this.state.firstName} onChange={e => this.change(e)} type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value})} type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="lastName" value={this.state.email} onChange={e => this.setState({ email: e.target.value})} type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput4">
                <Form.Label>Password</Form.Label>
                <Form.Control name="lastName" value={this.state.password} onChange={e => this.setState({ password: e.target.value})} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="ControlInput5">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phoneNumber" value={this.state.phoneNumber} onChange={e => this.change(e)} type="tel" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group controlId="ControlInput6">
                <Form.Label>Role</Form.Label>
                <Form.Control name="role" value={this.state.role} onChange={e => this.change(e)} type="text" placeholder="Role" />
              </Form.Group>
              <Form.Group controlId="ControlInput7">
                <Form.Label>Office Location</Form.Label>
                <Form.Control name="officeLocation" value={this.state.officeLocation} onChange={e => this.change(e)} type="text" placeholder="Office Location" />
              </Form.Group>
              <Form.Group controlId="ControlInput8">
                <Form.Label>Floor</Form.Label>
                <Form.Control name="floor" value={this.state.floor} onChange={e => this.change(e)} type="text" placeholder="Floor" />
              </Form.Group>
              <Form.Group controlId="ControlInput9">
                <Form.Label>Room</Form.Label>
                <Form.Control name="room" value={this.state.room} onChange={e => this.change(e)} type="text" placeholder="Room" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={e => this.onSubmit(e)}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Container>
          );

  }

  }
