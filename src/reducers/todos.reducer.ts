import { ADD_TODO, TOGGLE_TODO } from '../actionTypes/todo.types';
import { todos } from '../state/todos';

interface actionType {
  type: string;
  index?: number;
  payload: {
    text: string;
    completed: false;
  };
}
export const TodoReducer = function(state = todos, action: actionType) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            completed: action.payload.completed
          }
        ]
      };
    case TOGGLE_TODO:
      return state.todos.map((todo: any, i: number) => {
        if (i === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      });
    default:
      return state;
  }
};
