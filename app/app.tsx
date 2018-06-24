import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { addGun, incrementGun, addGunAsync } from './redux/counter.redux';

interface AppType {
  store: any;
  addGun: any;
  incrementGun: any;
  addGunAsync: any;
  num: number;
  counter: number;
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }: any) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }: any) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class App extends React.Component<AppType> {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
        <p>current num is {this.props.counter}</p>
        <button onClick={this.props.addGun}> + </button>
        <button onClick={this.props.incrementGun}> - </button>
        <button onClick={this.props.addGunAsync}> async </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  };
};

const actionCreators = { addGun, incrementGun, addGunAsync };

export default connect(
  mapStateToProps,
  actionCreators
)(App);
