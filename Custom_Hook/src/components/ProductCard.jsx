function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-neutral-800 p-2 rounded-xl shadow-md border border-neutral-700 hover:shadow-xl transition">
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <p className="text-lg text-neutral-300 mb-2">${product.price}</p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded-lg font-medium"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
