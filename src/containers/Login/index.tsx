import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
  foo: string;
}

class Login extends React.Component<Props> {
  fnPrintProps() {}
  public render() {
    return (
      <div>
        <p>{this.props.match.path}</p>
        <span>login</span>
        <button onClick={this.fnPrintProps.bind(this)}> print </button>
      </div>
    );
  }
}

export default Login;
