import { Products } from "./data/products";
import ProductCart from "./components/ProductCard";
import { useCart } from "./hooks/useCart";
import Cart from "./components/Cart";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white">
      <header className="p-4 text-3xl font-bold bg-neutral-950 border-b border-neutral-700">
        🛒 Shopping Cart
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        <div>
          <Cart 
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          total={total}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
