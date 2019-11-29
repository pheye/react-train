import React from 'react';
import { connect } from 'dva';
//import { getAllProducts } from '../reducers/products';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends React.Component {
    componentDidMount () {
        const { dispatch } = this.props;

        dispatch({
            type:'products/get'
        });
    }
    render () {
        const products = [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
          ]
        return <div>
        <h2>购物车实例</h2>
        <hr/>
        <ProductList products={products}/>
        <hr/>
        <Cart products={[]}/>
        </div>
    }
}

export default connect()(App);