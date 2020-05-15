const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { job: action.payload, status: false, id: action.id }];
    case 'REMOVE':
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
      return state;
    case 'COMPLETE':
      state = state.forEach((e) => {
        if (e.job === action.payload) {
          e.status = !e.status;
        }
      });
      return state;
    default:
      return state;
  }
};
export default todoReducer;
