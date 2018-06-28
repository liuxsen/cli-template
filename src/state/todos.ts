interface todoType {
  text: string;
  completed: boolean;
}

export interface todosType {
  title: string;
  todos: Array<todoType>;
}

export const todoState: todosType = {
  title: 'name',
  todos: [
    {
      text: 'todo1',
      completed: false
    }
  ]
};
