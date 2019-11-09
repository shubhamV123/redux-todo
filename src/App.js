import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css';


function App() {
  return (
    <div className="App">

      <AddTodo />
      <VisibleTodoList />

    </div>
  );
}

export default App;
