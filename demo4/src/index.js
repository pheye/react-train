import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
	Link
} from "react-router-dom";

import Todos from './todos/index';
import Todomvc from './todomvc/index';
import ShoppingCart from './shopping-cart/index';

const App = () => (
	<Router>
<Switch>
	<Route exact path="/">
		<ul>
    <li><Link to="/todos">Todos</Link></li>
	<li><Link to="/todomvc">TodoMvc</Link></li>
	<li><Link to="/shopping-cart">ShoppingCart</Link></li>

		</ul>	
	</Route>
	<Route exact path="/todos" component={Todos} />
	<Route exact path="/todomvc" component={Todomvc} />
	<Route exact path="/shopping-cart" component={ShoppingCart} />

	</Switch>
</Router>
)
ReactDOM.render(<App/>, 
    document.getElementById('root'));
