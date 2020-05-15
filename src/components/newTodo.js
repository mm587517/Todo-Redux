import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const NewTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!todo.trim()) {
          return;
        }
        dispatch(increment(1));
        dispatch(addTodo(todo));
        setTodo('');
      }}
    >
      {/* Controlled Components (this one is uncontrolled) */}
      <TextField
        id='standard-basic'
        label='Standard'
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />

      <Button type='submit' variant='contained'>
        Add Todo
      </Button>
    </form>
  );
};
