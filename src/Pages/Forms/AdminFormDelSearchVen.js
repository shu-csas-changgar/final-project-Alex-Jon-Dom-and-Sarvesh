import React from 'react';
import DelSearchVen from '../../Components/DelSearchVen'

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
            <DelSearchVen onSubmit={fields => this.onSubmit(fields)} />  
          </div>          
          );             
  } 
  }


