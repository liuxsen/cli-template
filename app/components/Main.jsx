import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>main page</h1>
        <button onClick={() => this.props.onChangeUserName('change-name')}>
          change-name
        </button>
      </div>
    );
  }
}
