import CartItem from "./CartItem";

function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  if (cart.length === 0) {
    return <h1>Pleaes add items to cart</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-neutral-800 p-6 rounded-lg border border-neutral-700">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      <div className="space-y-4">
        {cart.map((item, idx) => (
          <CartItem
            key={idx}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
            item={item}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-600">
        <h3 className="text-xl font-semibold">Total: ${total}</h3>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
