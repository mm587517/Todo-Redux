import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../actions';

export const RemoveTodo = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        dispatch(removeTodo(todos));
      }}
    >
      <Button type='submit' variant='contained'>
        Remove completed tasks
      </Button>
    </form>
  );
};
