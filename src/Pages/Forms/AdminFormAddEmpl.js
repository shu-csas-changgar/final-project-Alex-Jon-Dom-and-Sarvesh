import React from 'react';
import AddEmpl from '../../Components/AddEmpl'

export default class AdminFormAddEmpl extends React.Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log("Comp got: ", fields);
  };
  
  render() {
      return (
          <div>
            <AddEmpl onSubmit={fields => this.onSubmit(fields)} />
            {/* <p>
              {JSON.stringify(this.state.fields, null, 2)}
            </p> */}
          </div>
              
          );              
  } 
  }


