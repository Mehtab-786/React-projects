import CartItem from "./CartItem.jsx";

function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  if (cart.length === 0) {
    return <h1>No Items Added Yet</h1>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))};
      <h3>Total : ${total}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
