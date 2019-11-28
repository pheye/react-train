import React from 'react';

const ProductList = props => {
  const { products, addToCart } = props;
  const list = products.map((item, key) => (
    <li key={key}>
      <div>
        <span>{item.title}</span>{' '}
        <span>{item.price}</span>{' '}
        <span>x{item.quantity}</span>
      </div>
      <div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </li>
  ));
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default ProductList;