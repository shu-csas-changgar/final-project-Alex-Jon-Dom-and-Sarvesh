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

  onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
  };


  render() {
      return (
        <Container style={{marginBottom: "50px", marginTop: "20px"}}>
        <Card style={{width: '50%', margin: '0 auto',}}>
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
