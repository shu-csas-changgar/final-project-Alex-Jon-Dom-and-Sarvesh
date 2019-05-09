import React from 'react';


export default class DelSearchUpdEmpl extends React.Component {
  state = {
      firstName: '',
      lastName: '',
      employeeId: '',
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
              <br />
              <input
               name='firstName'
               placeholder='First Name'
               value={this.state.firstName}
               onChange={e => this.change(e)}
               />
               <br />

              <input
               name='lastName'
               placeholder='Last Name'
               value={this.state.lastName}
               onChange={e => this.change(e)}
               />
               <br />

              <input
               name='employeeId'
               placeholder='Employee ID'
               value={this.state.employeeId}
               onChange={e => this.change(e)}
               />
               <br />
               <br />

               <button onClick={e => this.onSubmit(e)}>Submit</button>

          </form>

          );

  }

  }
