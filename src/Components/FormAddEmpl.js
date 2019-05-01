import React, { Component } from 'react';

export default class FormAddEmpl extends React.Component {
state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: '',
    officeLocation: '',
    floor: '',
    room: '',
}

change = e => {
    this.setStateState({
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
             onChange={e => this.setState({ lastName: e.target.value})}
             />
             <br />

            <input
             name='phoneNumber'
             placeholder='Phone Number' 
             value={this.state.phoneNumber} 
             onChange={e => this.change(e)}             
             />
             <br />

            <input
             name='role'
             placeholder='Role' 
             value={this.state.role} 
             onChange={e => this.change(e)}            
             />
             <br />

            <input
             name='officelocation'
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

             <botton onClick={e => this.onSubmit(e)}>Submit</botton>

        </form>
            
        );
            
}

}