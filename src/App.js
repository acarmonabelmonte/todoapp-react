import React from 'react';
import './App.css';
import TodoItemHead from './components/TodoItemHead';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
