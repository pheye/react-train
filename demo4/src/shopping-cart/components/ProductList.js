import React from 'react';

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
        <button onClick={() => addToCart(item.id)} disabled={!item.inventory}>Add to cart</button>
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