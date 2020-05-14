const completeReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMPLETE':
      return !state;

    default:
      return state;
  }
};
export default completeReducer;
