import React, { Component } from 'react';


export default class SignIn extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <button className="btn" onClick={this.props.onLogin}>Connect</button>
      </div>
    );
  }
}


