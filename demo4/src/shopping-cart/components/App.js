import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends React.Component {
    render () {
        const cart = {
            subtotal: 100.0,
            items: [
                {
                    title: 'T-shirt',
                    price: 20.0,
                    quantity: 1
                }
            ]
        }
        const products = [
            {
                title: 'iPAD Mini',
                price: 1000,
                quantity:10
            }
        ]
        return <div>
        <h2>购物车实例</h2>
        <hr/>
        <ProductList products={products}/>
        <hr/>
        <Cart cart={cart}/>
        </div>
    }
}

export default App;