const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { job: action.payload, status: false, id: action.id }];
    case 'REMOVE':
      return state.filter((value, index, arr) => {
        return value.status === false;
      });

    case 'COMPLETE':
      return state.map((el) =>
        el.id === action.id ? { ...el, status: !el.status } : el,
      );

    default:
      return state;
  }
};
export default todoReducer;
