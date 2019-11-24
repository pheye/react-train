import React from 'react';
import './App.css';
import FooterContainer from '../containers/FooterContainer';
import VisibleTodos from '../containers/VisibleTodos';
import AddTodoContainer from '../containers/AddTodoContainer';

class App extends React.Component {

  render () {

    return (<div>
      <AddTodoContainer/>
      <VisibleTodos />
      <FooterContainer/>
      </div>);
  }
}

export default App;
