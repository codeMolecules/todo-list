import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import '../App.css';

const App = () => (
  <div className="TodoListApp container">
    <AddTodoForm />
    <TodoList />
  </div>
);

export default App;
