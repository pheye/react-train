import React from 'react';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import reducers from './reducers'

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    }
    render () {
    return  (<Provider store={this.store}>
        <App />
    </Provider>)
    }
}


export default AppContainer;


