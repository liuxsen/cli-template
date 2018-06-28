/*
 * todo app
 * @Author: jianhui@yzyw-inc.com
 * @Date: 2018-06-28 14:14:30
 * @Last Modified by: jianhui
 * @Last Modified time: 2018-06-28 15:58:24
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../../actionTypes/todo.types';

const mapStateToProps = (state: any) => {
  return { todos: state.TodoReducer.todos };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fnClickAddTodo: () => {
      dispatch({ type: ADD_TODO, payload: { text: '123' } });
    }
  };
};

class Todos extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.fnClickShowState = this.fnClickShowState.bind(this);
  }
  fnClickShowState() {
    console.log(this.props.todos);
  }
  render() {
    return (
      <div>
        <p>hello,todos</p>
        <ul>
          {false ? <div>hello</div> : <h3> lasdkfj </h3>}
          {this.props.todos.map((todo: any, i: number) => {
            return <li key={i}>{todo.text}</li>;
          })}
        </ul>
        <button onClick={this.fnClickShowState}>show state</button>
        <button onClick={this.props.fnClickAddTodo}> addTODO </button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
