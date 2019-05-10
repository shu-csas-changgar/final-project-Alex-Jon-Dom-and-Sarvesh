import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';

export default class AddEqu extends React.Component {
  state = {
    type: '',
    serialNum: '',
    vendorId: '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendData = () => {
    fetch('../../query/addequ', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data === "INVALID") {
          // Sent the state's message
          console.log(data)
          this.setState({ message: "Missing data" })
        }
        else {
          // Set the global state to true
          console.log(data)
          this.props.action()
          this.props.history.push('/adminpage/addequ')
        }
      })
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("Comp got: ", this.state);
    this.sendData();
  };


  render() {
    return (
      <Container style={{ marginBottom: "50px", marginTop: "20px" }}>
        <Card style={{ width: '50%', margin: '0 auto', }}>
          <Card.Header>Add Equipment</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Type</Form.Label>
                <Form.Control name="type" value={this.state.type} onChange={e => this.change(e)} type="text" placeholder="Type" />
              </Form.Group>
              <Form.Group controlId="ControlInput2">
                <Form.Label>Serial Number</Form.Label>
                <Form.Control name="serialNum" value={this.state.serialNum} onChange={e => this.change(e)} type="number" placeholder="Serial Number" />
              </Form.Group>
              <Form.Group controlId="ControlInpu3">
                <Form.Label>Vendor ID</Form.Label>
                <Form.Control name="vendorId" value={this.state.vendorId} onChange={e => this.change(e)} type="number" placeholder="Vendor ID" />
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
