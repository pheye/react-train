import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App(props) {
  const { store } = props;

  return (
    <div className="App">
      <Counter value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})} onDecrement={() => store.dispatch({type: 'DECREMENT'})}></Counter>
    </div>
  );
}

export default App;
