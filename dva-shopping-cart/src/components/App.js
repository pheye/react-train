import React from 'react';
import { connect } from 'dva';
//import { getAllProducts } from '../reducers/products';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends React.Component {
    componentDidMount () {
        const { dispatch } = this.props;

        dispatch({
            type:'products/query'
        });
    }
    render () {
        return <div>
        <h2>购物车实例</h2>
        <hr/>
        <ProductList/>
        <hr/>
        <Cart/>
        </div>
    }
}

export default connect()(App);
