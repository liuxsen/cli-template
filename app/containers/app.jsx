import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';
import Main from '../components/Main.jsx';
import User from '../components/User.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'liuxsen'
    };
    this.changeUserName = this.changeUserName.bind(this);
  }
  changeUserName(newName) {
    this.setState({
      username: newName
    });
  }
  render() {
    return (
      <div>
        hello,
        <Main onChangeUserName={this.props.setName} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName(name) {
      dispatch(setName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
