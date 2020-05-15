import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  removeTodo,
  toggleTodo,
} from './actions';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Text from 'react';

function App() {
  const counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let input;

  return (
    <div className='App'>
      {todos.map((todo) => (
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
            label={todo.job}
          />
          <br></br>
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(increment(1));
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <TextField
          inputRef={(node) => (input = node)}
          id='standard-basic'
          label='Standard'
        />

        <Button type='submit' variant='contained'>
          Add Todo
        </Button>
      </form>
    </div>
  );
}

export default App;
