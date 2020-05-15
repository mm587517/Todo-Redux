import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../actions';

export const Todo = (props) => {
  const { todo, status, text } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            value='checkedA'
            inputProps={{ 'aria-label': 'Checkbox A' }}
            onChange={(e) => {
              dispatch(toggleTodo(todo));
            }}
          />
        }
        label={
          <span
            style={todo.status ? { textDecorationLine: 'line-through' } : {}}
          >
            {todo.job}
          </span> //inline formatting
        }
      />
      <br></br>
    </div>
  );
};
