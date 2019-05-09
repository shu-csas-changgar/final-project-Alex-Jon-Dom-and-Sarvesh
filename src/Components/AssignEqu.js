import React from 'react';


export default class AssignEqu extends React.Component {
  state = {
      serialNum: '',
      employeeId: '',
      DepartmentId: '',
      officeLocation: '',
      floor: '',
      room: '',
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
          <form>

              <p>Please enter the serial number of the equipment to be assigned</p>

              <input
               name='serialNum'
               placeholder='Serial Number'
               value={this.state.serialNum}
               onChange={e => this.change(e)}
               />
               <br />

               <p></p>
               <p>Assign to either:</p>

              <input
               name='employeeId'
               placeholder='Employee ID'
               value={this.state.employeeId}
               onChange={e => this.change(e)}
               />
               <br />

               <p>OR</p>

              <input
               name='DepartmentId'
               placeholder='Department ID'
               value={this.state.DepartmentId}
               onChange={e => this.change(e)}
               />
               <br />

               <p>OR</p>

              <input
               name='officeLocation'
               placeholder='Office Location'
               value={this.state.officeLocation}
               onChange={e => this.change(e)}
               />
               <br />

              <input
               name='floor'
               placeholder='Floor'
               value={this.state.floor}
               onChange={e => this.change(e)}
               />
               <br />

              <input
               name='room'
               placeholder='Room'
               value={this.state.room}
               onChange={e => this.change(e)}
               />
               <br />
               <br />

               <button onClick={e => this.onSubmit(e)}>Submit</button>

          </form>

          );

  }

  }
