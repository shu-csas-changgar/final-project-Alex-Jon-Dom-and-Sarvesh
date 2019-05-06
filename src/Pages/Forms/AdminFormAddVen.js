import React from 'react';
import AddVen from '../../Components/AddVen'

export default class AdminFormAddVen extends React.Component {
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
            <AddVen onSubmit={fields => this.onSubmit(fields)} />
          </div>          
          );             
  } 
  }


