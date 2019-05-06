import React from 'react';


export default class DelSearchVen extends React.Component {
  state = {
      name: '',
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
      this.setState({
        name: '',
        vendorId: '',
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
               name='vendorId'
               placeholder='Vendor ID' 
               value={this.state.vendorId} 
               onChange={e => this.change(e)}             
               />
               <br />
               <br />

               <button onClick={e => this.onSubmit(e)}>Submit</button>
  
          </form>
              
          );
              
  }
  
  }


