import React from 'react';
import './App.css';

import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <p>To-do List</p>
      <AddTodos />
      <TodoList />
    </div>
  );
}

export default App;
