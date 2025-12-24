function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>${product.price}</h1>
      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
