import React from 'react';
import { Tabs, Tab, Container, Card, Table, InputGroup, FormControl, Modal, Button, Form } from 'react-bootstrap';

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) { setCookie(name, '', -1); }

export default class EmployeePersonalPage extends React.Component {

  state = {
    equipment: [],
    myEquipment: []
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

  returnEquipment(equ) {
    if (window.confirm("Are you sure that you wish to return equipment ID #" + equ)) {
      var converted = {id: equ};

      fetch('../../query/returnequipment', {
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
            this.setState({ message: "There was an error returning that equipment!" })
          }
          else {
            //EMPLOYEES
            fetch('../../query/getemployeeequipment')
              .then(res => res.json())
              .then(data => this.setState({ equipment: data }))
              .catch((error) => {
                this.setState({ message: "Unable to connect to the server at this time" })
              })
  
            //MY OWN EQUIPMENT
            fetch('../../query/getmyequipment', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({employeeID: getCookie("employeeID")})
            })
            .then(res => res.json())
            .then(data => this.setState({ myEquipment: data }))
            .catch((error) => {
              this.setState({ message: "Unable to connect to the server at this time" })
            })
          }
        })
        .catch((error) => {
          this.setState({ message: "Unable to connect to the server at this time" })
        });
    }
  }
  assignEquipment(equ) {
    var converted = { id: equ, employeeID: getCookie("employeeID") }

    fetch('../../query/assignemployeeequ', {
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
          this.setState({ message: "There was an error assigning to that employee!" })
        }
        else {
          //EMPLOYEES
          fetch('../../query/getemployeeequipment')
            .then(res => res.json())
            .then(data => this.setState({ equipment: data }))
            .catch((error) => {
              this.setState({ message: "Unable to connect to the server at this time" })
            })

          //MY OWN EQUIPMENT
          fetch('../../query/getmyequipment', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({employeeID: getCookie("employeeID")})
          })
          .then(res => res.json())
          .then(data => this.setState({ myEquipment: data }))
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
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })

      //EQUIPMENT
      fetch('../../query/getmyequipment', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({employeeID: getCookie("employeeID")})
      })
      .then(res => res.json())
      .then(data => this.setState({ myEquipment: data }))
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })


      console.log("Employee ID: " + getCookie("employeeID"))
  }


  render() {
    return (
      <Container style={{ padding: "30px" }}>
        <Card style={{ margin: "0 auto", width: "95%" }}>
          <Card.Header as="h5">Employee Panel</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="myEquipment" id="uncontrolled-tab-example">
            <Tab eventKey="myEquipment" title="My Equipment">
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
                    My Equipment
                </Card.Text>
                <Table id="equipment" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Serial #</th>
                      <th>Vendor ID</th>
                      <th>Type</th>
                      <th>Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(this.state.myEquipment) && this.state.myEquipment.map(el => (
                      <tr key={"equipment-" + el.Equipment_ID}>
                        <td>{el.Equipment_ID}</td>
                        <td>{el.Equipment_Serial_Number}</td>
                        <td>{el.Vendor_ID}</td>
                        <td>{el.Equipment_Type}</td>
                        <td><Button variant="primary" onClick={this.returnEquipment.bind(this, el.Equipment_ID)}>
                          Return
                          </Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="availableEquipment" title="Available Equipment">
                <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Serial Number, Vendor ID, Location, Etc."
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onKeyUp={this.filterSearch.bind(this, "availablEquipment")}
                  />
                </InputGroup>
                <Card.Text>
                    {"Available Equipment in the Storage Room: " + (Array.isArray(this.state.equipment) ? this.state.equipment.length : 0)}
                </Card.Text>
                <Table id="availableEquipment" striped bordered hover variant="dark">
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
                    {Array.isArray(this.state.equipment) && this.state.equipment.map(el => (
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
                        <td><Button variant="primary" onClick={this.assignEquipment.bind(this, el.Equipment_ID)}>
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
