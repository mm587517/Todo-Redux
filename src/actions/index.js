let globalId = 0;
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
    id: globalId++,
  };
};

export const removeTodo = (todo) => {
  return {
    type: 'REMOVE',
    payload: todo,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: 'COMPLETE',
    payload: todo,
  };
};
