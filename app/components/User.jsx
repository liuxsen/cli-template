import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>user</h1>
        <div>User-Name: {this.props.username}</div>
      </div>
    );
  }
}
