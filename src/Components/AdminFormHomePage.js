import React from 'react';
import { Tabs, Tab, Container, Card, Table, InputGroup, FormControl, Modal, Button, Form } from 'react-bootstrap';

function loc(id) {
  if (id === 1) {
    return "South Orange";
  }
  else if (id === 2) {
    return "Livingston";
  }
  else if (id === 3) {
    return "Parsippany";
  }
}

export default class AdminFormHomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      vendors: [],
      equipment: [],
      editEmpModalShow: false,
      editEmp: {},
      editVenModalShow: false,
      editVen: {},
      assignEquModalShow: false,
      assignEqu: {}
    }

    this.editEmpModalShow = this.editEmpModalShow.bind(this);
    this.editEmpModalClose = this.editEmpModalClose.bind(this);
    this.editVenModalShow = this.editVenModalShow.bind(this);
    this.editVenModalClose = this.editVenModalClose.bind(this);
    this.assignEquModalShow = this.assignEquModalShow.bind(this);
    this.assignEquModalClose = this.assignEquModalClose.bind(this);
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

  editEmpModalClose() {
    this.setState({ editEmpModalShow: false });
  }

  editEmpModalShow() {
    this.setState({ editEmpModalShow: true });
  }

  editVenModalClose() {
    this.setState({ editVenModalShow: false });
  }

  editVenModalShow() {
    this.setState({ editVenModalShow: true });
  }

  assignEquModalClose() {
    this.setState({ assignEquModalShow: false });
  }

  assignEquModalShow() {
    this.setState({ assignEquModalShow: true });
  }

  editEmp(obj) {
    this.editEmpModalShow();
    this.setState({ editEmp: obj });
  }

  editVen(obj) {
    this.editVenModalShow();
    this.setState({ editVen: obj });
  }

  assignEqu(obj) {
    this.assignEquModalShow();
    this.setState({ assignEqu: obj });
  }

  editEmployee(emp) {
    var inputs = document.getElementById("editEmployeeForm").getElementsByTagName("input");
    var converted = { id: emp };
    for (var i = 0; i < inputs.length; i++) {
      converted[inputs[i].name] = inputs[i].value;
    }
    fetch('../../query/updateemp', {
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
          fetch('../../query/getemployees')
            .then(res => res.json())
            .then(data => this.setState({ employees: data }))
            .then(this.editEmpModalClose())
            .catch((error) => {
              this.setState({ message: "Unable to connect to the server at this time" })
            })
        }
      })
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      });
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

  editVendor(ven) {
    var inputs = document.getElementById("editVendorForm").getElementsByTagName("input");
    var converted = { id: ven };
    for (var i = 0; i < inputs.length; i++) {
      converted[inputs[i].name] = inputs[i].value;
    }
    console.log(converted)
    fetch('../../query/updateven', {
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
          fetch('../../query/getvendors')
            .then(res => res.json())
            .then(data => this.setState({ vendors: data }))
            .then(this.editVenModalClose())
            .catch((error) => {
              this.setState({ message: "Unable to connect to the server at this time" })
            })
        }
      })
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      });
  }

  deleteEmp(emp) {
    if (window.confirm("Are you sure you want to delete employee ID #" + emp)) {
      fetch('../../query/delemp', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: emp })
      })
        .then(res => res.json())
        .then(data => {
          if (data === "INVALID") {
            // Sent the state's message
            console.log(data)
            this.setState({ message: "There was an error deleting that employee!" })
          }
          else {
            //EMPLOYEES
            fetch('../../query/getemployees')
              .then(res => res.json())
              .then(data => this.setState({ employees: data }))
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

  deleteVen(ven) {
    if (window.confirm("Are you sure you want to delete Vendor ID #" + ven)) {
      fetch('../../query/delven', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: ven })
      })
        .then(res => res.json())
        .then(data => {
          if (data === "INVALID") {
            // Sent the state's message
            console.log(data)
            this.setState({ message: "There was an error deleting that vendor!" })
          }
          else {
            //Vendors
            fetch('../../query/getvendors')
              .then(res => res.json())
              .then(data => this.setState({ vendors: data }))
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

  deleteEqu(equ) {
    if (window.confirm("Are you sure you want to delete Equipment ID #" + equ)) {
      fetch('../../query/delequ', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: equ })
      })
        .then(res => res.json())
        .then(data => {
          if (data === "INVALID") {
            // Sent the state's message
            console.log(data)
            this.setState({ message: "There was an error deleting that equipment!" })
          }
          else {
            //Equipment
            fetch('../../query/getequipment')
              .then(res => res.json())
              .then(data => this.setState({ equipment: data }))
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

  componentDidMount() {

    //EMPLOYEES
    fetch('../../query/getemployees')
      .then(res => res.json())
      .then(data => this.setState({ employees: data }))
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })

    //VENDORS
    fetch('../../query/getvendors')
      .then(res => res.json())
      .then(data => this.setState({ vendors: data }))
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })

    //EQUIPMENT
    fetch('../../query/getequipment')
      .then(res => res.json())
      .then(data => this.setState({ equipment: data }))
      .catch((error) => {
        this.setState({ message: "Unable to connect to the server at this time" })
      })

  }


  render() {
    return (
      <Container style={{ padding: "30px" }}>
        <Modal show={this.state.editEmpModalShow} onHide={this.editEmpModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="editEmployeeForm">
              <Form.Group controlId="ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" defaultValue={this.state.editEmp.First_Name} type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" defaultValue={this.state.editEmp.Last_Name} type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" defaultValue={this.state.editEmp.Email} type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput5">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phoneNumber" defaultValue={this.state.editEmp.Phone_Number} type="tel" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group controlId="ControlInput6">
                <Form.Label>Role</Form.Label>
                <Form.Control name="role" defaultValue={this.state.editEmp.Role_ID} type="number" placeholder="Role" />
              </Form.Group>
              <Form.Group controlId="ControlInput7">
                <Form.Label>Office Location</Form.Label>
                <Form.Control name="officeLocation" defaultValue={this.state.editEmp.Role_ID} type="number" placeholder="Office Location" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.editEmpModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.editEmployee.bind(this, this.state.editEmp.Employee_ID)}>
              Edit Employee
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.editVenModalShow} onHide={this.editVenModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Vendor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="editVendorForm">
              <Form.Group controlId="ControlInput1">
                <Form.Label>Vendor Name</Form.Label>
                <Form.Control name="vendorName" defaultValue={this.state.editVen.Vendor_Name} type="text" placeholder="Vendor Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phoneNumber" defaultValue={this.state.editVen.Vendor_Phone_Number} type="tel" placeholder="Phone Number" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.editVenModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.editVendor.bind(this, this.state.editVen.Vendor_ID)}>
              Edit Vendor
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.assignEquModalShow} onHide={this.assignEquModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Equipment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="assignEquipmentForm">
              <Card>
                <Card.Header as="h5">Employee</Card.Header>
                  <Card.Body>
                    <Card.Text>
                        Assign Equipment to an Employee
                    </Card.Text>
                    <Form.Group controlId="formGridState">
                      <Form.Label>Employee</Form.Label>
                      <Form.Control id="assignEquipmentFormEmployee" as="select">
                        <option value="NULL">None</option>
                        {Array.isArray(this.state.employees) &&  this.state.employees.map(el => (
                          <option value={el.Employee_ID}>{el.First_Name + " " + el.Last_Name + " (ID #" + el.Employee_ID + ")"}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Card.Body>
              </Card>
              <br />
              <Card>
                <Card.Header as="h5">Location</Card.Header>
                  <Card.Body>
                    <Card.Text>
                        Assign Equipment to a Location
                    </Card.Text>
                    <Form.Group controlId="ControlInput1">
                      <Form.Label>Office Location</Form.Label>
                      <Form.Control name="officeLocation" defaultValue={this.state.assignEqu.Office_Location_ID} type="number" placeholder="Office Location" />
                    </Form.Group>
                    <Form.Group controlId="ControlInput2">
                      <Form.Label>Floor Number</Form.Label>
                      <Form.Control name="floorNum" defaultValue={this.state.assignEqu.Floor_Number} type="number" placeholder="Floor Number" />
                    </Form.Group>
                    <Form.Group controlId="ControlInput3">
                      <Form.Label>Room Number</Form.Label>
                      <Form.Control name="roomNum" defaultValue={this.state.assignEqu.Room_ID} type="number" placeholder="Room Number" />
                    </Form.Group>
                  </Card.Body>
              </Card>
              <br />
              <Card>
                <Card.Header as="h5">Department</Card.Header>
                  <Card.Body>
                    <Card.Text>
                        Assign Equipment to a Department
                    </Card.Text>
                    <Form.Group controlId="ControlInput4">
                      <Form.Label>Department</Form.Label>
                      <Form.Control name="departmentID" defaultValue={this.state.assignEqu.Department_ID} type="number" placeholder="Department ID" />
                    </Form.Group>
                  </Card.Body>
              </Card>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.assignEquModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.assignEquipment.bind(this, this.state.assignEqu.Equipment_ID)}>
              Assign Equipment
            </Button>
          </Modal.Footer>
        </Modal>
        <Card style={{ margin: "0 auto", width: "95%" }}>
          <Card.Header as="h5">Admin Panel</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="employees" id="uncontrolled-tab-example">
              <Tab eventKey="employees" title="Employees">
                <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Name, Location, Etc."
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onKeyUp={this.filterSearch.bind(this, "employees")}
                  />
                </InputGroup>
                <Table striped bordered hover variant="dark" id="employees">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(this.state.employees) && this.state.employees.map(el => (
                      <tr key={"employee-" + el.Employee_ID}>
                        <td>{el.Employee_ID}</td>
                        <td>{el.First_Name}</td>
                        <td>{el.Last_Name}</td>
                        <td>{el.Email}</td>
                        <td>{el.Phone_Number}</td>
                        <td>{loc(el.Office_Location_ID)}</td>
                        <td><Button variant="primary" onClick={this.editEmp.bind(this, el)}>
                          Edit
                          </Button></td>
                        <td><Button variant="primary" onClick={this.deleteEmp.bind(this, el.Employee_ID)}>
                          Delete
                          </Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="vendors" title="Vendors">
                <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Name, Phone, Etc."
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onKeyUp={this.filterSearch.bind(this, "vendors")}
                  />
                </InputGroup>
                <Table id="vendors" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Vendor Name</th>
                      <th>Phone Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(this.state.vendors) && this.state.vendors.map(el => (
                      <tr key={"vendor-" + el.Vendor_ID}>
                        <td>{el.Vendor_ID}</td>
                        <td>{el.Vendor_Name}</td>
                        <td>{el.Vendor_Phone_Number}</td>
                        <td><Button variant="primary" onClick={this.editVen.bind(this, el)}>
                          Edit
                          </Button></td>
                        <td><Button variant="primary" onClick={this.deleteVen.bind(this, el.Vendor_ID)}>
                          Delete
                          </Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>
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
                    {"Equipment Count: " + (Array.isArray(this.state.equipment) ? this.state.equipment.length : 0)}
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
                      <th>Delete</th>
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
                        <td><Button variant="primary" onClick={this.assignEqu.bind(this, el)}>
                          Assign
                          </Button></td>
                        <td><Button variant="primary" onClick={this.deleteEqu.bind(this, el.Equipment_ID)}>
                          Delete
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
