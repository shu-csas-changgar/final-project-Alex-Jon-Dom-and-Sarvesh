import React from 'react';
import AddEqu from '../../Components/AddEqu'

export default class AdminFormAddEmpl extends React.Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log("Comp got: ", fields);
    this.sendData();
  };

  sendData = () => {
      fetch('../../query/addequ', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.fields)
      })
      .then( res => res.json())
      .then( data => {
        if (data === "INVALID") {
          // Sent the state's message
          console.log(data)
          this.setState({message: "Missing data"})
        }
        else{
          // Set the global state to true
          console.log(data)
          this.props.action()
          this.props.history.push('/adminpage/addequ')
        }
      })
      .catch((error) =>{
        this.setState({message: "Unable to connect to the server at this time"})
      })
    }

  render() {

      return (
          <div>
            <AddEqu onSubmit={fields => this.onSubmit(fields)} />
          </div>
          );
  }
  }
