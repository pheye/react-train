import React from 'react';
import './App.css';
import FooterContainer from '../containers/FooterContainer';
import VisibleTodos from '../containers/VisibleTodos';
import AddTodoContainer from '../containers/AddTodoContainer';
import UndoRedo from '../containers/UndoRedo';

class App extends React.Component {

  render () {

    return (<div>
      <AddTodoContainer/>
      <VisibleTodos />
      <FooterContainer/>
      <UndoRedo/>
      </div>);
  }
}

export default App;
