const ADD = 'ADD';
const INCREMENT = 'INCREMENT';

interface actionType {
  type: string;
}

// reducer
export function counter(state = 0, action: actionType) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
      break;
    case 'INCREMENT':
      return state - 1;
      break;
    default:
      return state;
      break;
  }
}

// action creator
export function addGunAsync() {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(addGun());
    }, 2000);
  };
}

export function addGun() {
  return {
    type: ADD
  };
}

export function incrementGun() {
  return {
    type: INCREMENT
  };
}
