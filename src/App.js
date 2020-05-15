import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { NewTodo } from './components/newTodo';
import { Todo } from './components/Todo';
import { RemoveTodo } from './components/RemoveTodo';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className='App'>
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='center'
      >
        <Grid item>
          <NewTodo />
        </Grid>
        <Grid item>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </Grid>
        <Grid item>
          <RemoveTodo>Clear Completed Tasks</RemoveTodo>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
