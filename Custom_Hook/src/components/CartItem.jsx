import React from "react";

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div>
      <div>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
          Minus
        </button>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          Add
        </button>
        
        <button onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>

    </div>
  );
}

export default CartItem;
