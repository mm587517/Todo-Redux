import counterReducer from './counter';
import todoReducer from './todos';
import completeReducer from './isComplete';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  isComplete: completeReducer,
});

export default allReducers;
