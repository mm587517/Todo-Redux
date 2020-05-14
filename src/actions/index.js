export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const addTodo = (todo) => {
  return {
    type: 'ADD',
    payload: todo,
  };
};

export const removeTodo = (todo) => {
  return {
    type: 'REMOVE',
    payload: todo,
  };
};

export const toggleTodo = () => {
  return {
    type: 'COMPLETE',
  };
};
