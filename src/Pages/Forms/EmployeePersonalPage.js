import React from 'react';
import { Tabs, Tab, Container, Card, Table, InputGroup, FormControl, Modal, Button, Form } from 'react-bootstrap';

export default class EmployeePersonalPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      equipment: []
    }

  }

  filterSearch(id, e) {
    var name = e.target.value;
    console.log(name);
    var elements = document.getElementById(id).getElementsByTagName("tbody")[0].childNodes;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].innerHTML.indexOf(name) === -1) {
        elements[i].style.display = "none";
      }
      else {
        elements[i].style.display = "";
      }
    }
  }

  assignEqu(obj) {
    this.setState({ assignEqu: obj });
  }


  assignEquipment(equ) {
    var inputs = document.getElementById("assignEquipmentForm").getElementsByTagName("input");
    var converted = { id: equ };
    for (var i = 0; i < inputs.length; i++) {
      converted[inputs[i].name] = inputs[i].value;
    }

    converted["employeeID"] = document.getElementById("assignEquipmentFormEmployee").value;

    fetch('../../query/assignequ', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(converted)
    })
      .then(res => res.json())
      .then(data => {
        if (data === "INVALID") {
          // Sent the state's message
          console.log(data)
          this.setState({ message: "There was an error updating that employee!" })
        }
        else {
          //EMPLOYEES
          fetch('../../query/getequipment')
            .then(res => res.json())
            .then(data => this.setState({ equipment: data }))
            .then(this.assignEquModalClose())
            .catch((error) => {
              this.setState({ message: "Unable to connect to the server at this time" })
            })
        }
      })
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      });
  }

  
  componentDidMount() {

    //EQUIPMENT
    fetch('../../query/getemployeeequipment')
      .then(res => res.json())
      .then(data => this.setState({ equipment: data }))
      .then(console.log("PERSONAL PAGE"))
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })

  }


  render() {
    return (
      <Container style={{ padding: "30px" }}>
        <Card style={{ margin: "0 auto", width: "95%" }}>
          <Card.Header as="h5">Employee Panel</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="equipment" id="uncontrolled-tab-example">
              <Tab eventKey="equipment" title="Equipment">
                <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Serial Number, Vendor ID, Location, Etc."
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onKeyUp={this.filterSearch.bind(this, "equipment")}
                  />
                </InputGroup>
                <Card.Text>
                    Available Equipment in the Storage Room
                </Card.Text>
                <Table id="equipment" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Serial #</th>
                      <th>Vendor ID</th>
                      <th>Type</th>
                      <th>Employee ID</th>
                      <th>Office Location</th>
                      <th>Floor Number</th>
                      <th>Room Number</th>
                      <th>Department</th>
                      <th>Assign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.equipment.length === 0 ? "" : this.state.equipment.map(el => (
                      <tr key={"equipment-" + el.Equipment_ID}>
                      <td>{el.Equipment_ID}</td>
                        <td>{el.Equipment_Serial_Number}</td>
                        <td>{el.Vendor_ID}</td>
                        <td>{el.Equipment_Type}</td>
                        <td>{el.Employee_ID}</td>
                        <td>{el.Office_Location_ID}</td>
                        <td>{el.Floor_Number}</td>
                        <td>{el.Room_ID}</td>
                        <td>{el.Department_ID}</td>
                        <td><Button variant="primary" onClick={this.assignEqu.bind(this, el)}>
                          Assign
                          </Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    );

  }

}
