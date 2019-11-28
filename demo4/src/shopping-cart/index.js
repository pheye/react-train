import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import reducers from "./reducers";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    const middlewares = [thunk, createLogger()];
    this.store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  }
  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;
