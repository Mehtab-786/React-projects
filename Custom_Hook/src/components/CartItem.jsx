import React from "react";

function CartItem({ onUpdateQuantity, onRemove, item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <h3>{item.price}</h3>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
        Add Quantity
      </button>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
        Remove Quantity
      </button>
      <button onClick={() => onRemove(item.id)}>Delete</button>
      <button>{item.quantity}</button>
    </div>
  );
}

export default CartItem;
