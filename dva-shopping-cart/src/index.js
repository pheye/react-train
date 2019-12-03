import React from 'react';
import dva from 'dva';
import App from './components/App';
import products from './models/products';
import cart from './models/cart';

const app = dva();
app.model(products);
app.model(cart);
app.router(() => <App />);
app.start('#root');
