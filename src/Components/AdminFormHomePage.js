import React from 'react';
import { Tabs, Tab, Container, Card, Table, InputGroup, FormControl, Modal, Button, ButtonToolbar, Form } from 'react-bootstrap';

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
        editEmp: {}
    }

    this.editEmpModalShow = this.editEmpModalShow.bind(this);
    this.editEmpModalClose = this.editEmpModalClose.bind(this);
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

  editEmp(obj) {
    this.editEmpModalShow();
    this.setState({editEmp: obj});
  }

  updateEmpState(field, e) {
    var editEmp = {...this.state.editEmp};
    editEmp[field] = e.target.value;
    this.setState({editEmp});
    console.log(this.state.editEmp);
    console.log(this.state.editEmp);
  }

  editEmployee(emp) {
    var inputs = document.getElementById("editEmployeeForm").getElementsByTagName("input");
    var converted = {id: emp};
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
    .then( res => res.json())
    .then( data => {
      if (data === "INVALID") {
        // Sent the state's message
        console.log(data)
        this.setState({message: "There was an error updating that employee!"})
      }
      else{
        //EMPLOYEES
        fetch('../../query/getemployees')
        .then( res => res.json())
        .then( data => this.setState({employees: data }))
        .then(this.editEmpModalClose())
        .catch((error) =>{
          this.setState({message: "Unable to connect to the server at this time"})
        })
      }
    })
    .catch((error) =>{
      this.setState({message: "Unable to connect to the server at this time"})
    });
  }

  deleteEmp(emp) {
    if (window.confirm("Are you sure you want to delete employee ID #" + emp)) {
      fetch('../../query/delemp', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: emp})
      })
      .then( res => res.json())
      .then( data => {
        if (data === "INVALID") {
          // Sent the state's message
          console.log(data)
          this.setState({message: "There was an error deleting that employee!"})
        }
        else{
          //EMPLOYEES
          fetch('../../query/getemployees')
          .then( res => res.json())
          .then( data => this.setState({employees: data }))
          .catch((error) =>{
            this.setState({message: "Unable to connect to the server at this time"})
          })
        }
      })
      .catch((error) =>{
        this.setState({message: "Unable to connect to the server at this time"})
      });
    }
  }

   componentDidMount() {

     //EMPLOYEES
     fetch('../../query/getemployees')
     .then( res => res.json())
     .then( data => this.setState({employees: data }))
     .catch((error) =>{
       this.setState({message: "Unable to connect to the server at this time"})
     })

     //VENDORS
     fetch('../../query/getvendors')
     .then( res => res.json())
     .then( data => this.setState({vendors: data }))
     .catch((error) =>{
       this.setState({message: "Unable to connect to the server at this time"})
     })

     //EQUIPMENT
     fetch('../../query/getequipment')
     .then( res => res.json())
     .then( data => this.setState({equipment: data }))
     .catch((error) =>{
       this.setState({message: "Unable to connect to the server at this time"})
     })

   }


  render() {
      return (
        <Container style={{padding: "30px"}}>
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
        <Card style={{margin: "0 auto", width: "95%"}}>
          <Card.Header as="h5">Admin Panel</Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="employees" id="uncontrolled-tab-example">
              <Tab eventKey="employees" title="Employees">
                <InputGroup className="mb-3" style={{marginTop: "20px"}}>
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
                  {this.state.employees.map(el => (
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
                <InputGroup className="mb-3" style={{marginTop: "20px"}}>
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
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.vendors.map(el => (
                    <tr key={"vendor-" + el.Vendor_ID}>
                      <td>{el.Vendor_ID}</td>
                      <td>{el.Vendor_Name}</td>
                      <td>{el.Vendor_Phone_Number}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="equipment" title="Equipment">
                <InputGroup className="mb-3" style={{marginTop: "20px"}}>
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
                <Table id="equipment" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Serial #</th>
                      <th>Vendor ID</th>
                      <th>Type</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                  {/*this.state.equipment.map(el => (
                    <tr key={"equipment-" + el.Equipment_Serial_Number}>
                      <td>{el.Equipment_Serial_Number}</td>
                      <td>{el.Vendor_ID}</td>
                      <td>{el.Equipment_Type}</td>
                      <td>{el.Office_Location_ID}</td>
                    </tr>
                  ))*/}
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
