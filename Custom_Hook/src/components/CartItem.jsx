import React from "react";

function CartItem({ onUpdateQuantity, onRemove, item }) {
  return (
<div className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg border border-neutral-700">
  <div>
    <h3 className="text-lg font-semibold">{item.name}</h3>
    <p className="text-neutral-300">${item.price}</p>
  </div>

  <div className="flex items-center gap-2">
    <button 
      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
      className="bg-neutral-700 hover:bg-neutral-600 px-2 py-1 rounded"
    >
      -
    </button>

    <span className="px-3">{item.quantity}</span>

    <button 
      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
      className="bg-neutral-700 hover:bg-neutral-600 px-2 py-1 rounded"
    >
      +
    </button>

    <button 
      onClick={() => onRemove(item.id)}
      className="text-red-500 hover:text-red-400 font-medium ml-3"
    >
      Delete
    </button>
  </div>
</div>

  );
}

export default CartItem;
