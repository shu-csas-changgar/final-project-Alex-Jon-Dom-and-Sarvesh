import React from 'react';


export default class AddVen extends React.Component {
  state = {
      name: '',
      phoneNumber: '',
  }
  
  change = e => {
      this.setState({
          [e.target.name]: e.target.value 
      });
  };
  
  onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        name: '',
        phoneNumber: '',
      });
  };

  
  render() {
      return (
          <form>
              <br />
              <input
               name='name'
               placeholder='Name' 
               value={this.state.name} 
               onChange={e => this.change(e)}
               />
               <br />
  
              <input
               name='phoneNumber'
               placeholder='Phone Number' 
               value={this.state.phoneNumber} 
               onChange={e => this.change(e)}
               />
               <br />
               <br />

               <button onClick={e => this.onSubmit(e)}>Submit</button>
  
          </form>
              
          );
              
  }
  
  }


