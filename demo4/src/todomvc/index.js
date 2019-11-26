import React from 'react';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const AppContainer = () => 
<Provider store={store}>
    <App />
</Provider>

export default AppContainer;


