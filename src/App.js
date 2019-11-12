import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div>

      <AddTodo />
      <Footer />
      <VisibleTodoList />

    </div>
  );
}

export default App;
