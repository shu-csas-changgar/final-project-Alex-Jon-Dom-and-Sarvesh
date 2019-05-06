import React from 'react';


export default class AddEqu extends React.Component {
  state = {
      type: '',
      serialNum: '',
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
        type: '',
        serialNum: '',
      });
  };

  
  render() {
      return (
          <form>
              <br />
              <input
               name='type'
               placeholder='Type' 
               value={this.state.type} 
               onChange={e => this.change(e)}
               />
               <br />
  
              <input
               name='serialNum'
               placeholder='Serial Number' 
               value={this.state.serialNum} 
               onChange={e => this.change(e)}
               />
               <br />
               <br />

               <button onClick={e => this.onSubmit(e)}>Submit</button>
  
          </form>
              
          );
              
  }
  
  }


