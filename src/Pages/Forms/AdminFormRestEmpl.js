import React from 'react';
import DelSearchUpdEmpl from '../../Components/DelSearchUpdEmpl'

export default class AdminFormRestEmpl extends React.Component {
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
            <DelSearchUpdEmpl onSubmit={fields => this.onSubmit(fields)} />  
          </div>          
          );             
  } 
  }


