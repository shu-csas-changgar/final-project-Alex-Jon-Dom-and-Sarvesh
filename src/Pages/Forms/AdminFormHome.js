import React from 'react';
import AdminFormHomePage from '../../Components/AdminFormHomePage'

export default class AdminFormHome extends React.Component {
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
            <AdminFormHomePage />
          </div>
          );
  }
  }
