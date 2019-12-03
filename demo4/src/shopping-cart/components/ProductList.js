import React from 'react';
import { d } from '@/utils/utils';
import { connect } from 'dva';

const ProductList = props => {
  const { products, addToCart } = props;
  const list = products.map((item, key) => (
    <li key={key}>
      <div>
        <span>{item.title}</span>{'-'}
        <span>${item.price}</span>{' '}
        <span>x{item.inventory}</span>
      </div>
      <div>
        <button onClick={() => addToCart(item.id)} disabled={!item.inventory}>添加购物车</button>
      </div>
    </li>
  ));
  return (
    <div>
      <h3>Product</h3>
      <ul>
        {list}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state.products);
  console.log('state', d(state, 'products'));
  return {};
}
export default connect(mapStateToProps)(ProductList);
