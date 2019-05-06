import React from 'react';
import AddEqu from '../../Components/AddEqu'

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
            <AddEqu onSubmit={fields => this.onSubmit(fields)} />
          </div>          
          );             
  } 
  }


