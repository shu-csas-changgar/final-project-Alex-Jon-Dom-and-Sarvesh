import React from 'react';
import DelSearchEqu from '../../Components/DelSearchEqu'

export default class AdminFormDelSearchEqu extends React.Component {
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
            <DelSearchEqu onSubmit={fields => this.onSubmit(fields)} />  
          </div>          
          );             
  } 
  }


