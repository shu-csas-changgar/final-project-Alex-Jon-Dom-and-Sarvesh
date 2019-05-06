import React from 'react';
import AssignEqu from '../../Components/AssignEqu'

export default class AdminFormAssignEqu extends React.Component {
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
            <AssignEqu onSubmit={fields => this.onSubmit(fields)} />
          </div>          
          );             
  } 
  }


