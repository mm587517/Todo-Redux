import counterReducer from './counter';
import todoReducer from './todos';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export default allReducers;
