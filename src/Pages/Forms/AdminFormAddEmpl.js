import React from 'react';
import AddEmpl from '../../Components/AddEmpl'

export default class AdminFormAddEmpl extends React.Component {
  state = {
    fields: {},
    message: ''
  };


  render() {

      return (
          <div>
            <AddEmpl />
          </div>
          );
  }
  }
