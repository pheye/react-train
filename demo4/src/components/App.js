import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import VisibleTodos from '../containers/VisibleTodos';

class App extends React.Component {

  render () {

    return (<div>
      <AddTodo/>
      <VisibleTodos />
      <Footer current={0} onFilter={() => {}}/>
      </div>);
  }
}

export default App;
