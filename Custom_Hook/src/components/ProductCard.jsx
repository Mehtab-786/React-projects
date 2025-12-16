import React from 'react'

function ProductCard({product, onAddToCart}) {
  return (
    <div className='Product-Card'>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <button onClick={() => onAddToCart(product.id)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard