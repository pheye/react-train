import React from 'react';
import dva from 'dva';
import App from './components/App';
import products from './models/products';

const app = dva();
app.model(products);
app.router(() => <App />);
app.start('#root');