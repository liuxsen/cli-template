import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * props
 */
interface Props extends RouteComponentProps<any> {}

class Login extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.fnClickJumpToLogin = this.fnClickJumpToLogin.bind(this);
    this.fnPrintProps = this.fnPrintProps.bind(this);
  }
  fnClickJumpToLogin() {
    this.props.history.push('/login');
  }
  fnPrintProps() {}
  public render() {
    return (
      <div>
        <h3> home</h3>
        <p onClick={this.fnClickJumpToLogin}>jumpto login</p>
        <p onClick={this.fnPrintProps} />
      </div>
    );
  }
}

export default Login;
