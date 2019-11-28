import React from 'react';

const Cart = props => {
  const { cart, onCheckout } = props;
  const list = cart.items.map((item, key) => (
    <li key={key}>
      {item.title} {item.price} x {item.quantity}
    </li>
  ));
  return (
    <div>
      <h3>Your Cart</h3>
      <ul>{list}</ul>
      <div>Total: {cart.subtotal}</div>
      <div>
        <button onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
