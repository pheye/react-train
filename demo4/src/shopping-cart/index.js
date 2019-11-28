import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers'

const middlewares = [ thunk ];
const store = createStore(reducers,
    applyMiddleware(...middlewares)
);

const AppContainer = () => 
<Provider store={store}>
    <App />
</Provider>

export default AppContainer;


