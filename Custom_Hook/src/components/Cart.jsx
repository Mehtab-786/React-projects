import CartItem from "./CartItem"

function Cart({cart,onUpdateQuantity,onRemove,total}) {

  if (cart.length === 0) {
    return (
        <h1>Pleaes add items to cart</h1>
    )
  }
  
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, idx) => (
        <CartItem 
          key={idx}  
          onUpdateQuantity={onUpdateQuantity} 
          onRemove={onRemove}  
          item={item}
          />
      ))}
      <h3>Total : ${total}</h3>
      <button>Checkout</button>

    </div>    
  )
}

export default Cart