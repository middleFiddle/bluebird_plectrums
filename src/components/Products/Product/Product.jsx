import React from 'react'

const Product = ({ products }) => {
  return (
    <div className="product">
      <h1 className="text-gradient">{products.name}</h1>
      <p className="description text-gradient2">{products.description}</p>
      <img alt="colorful picks" src={products.img} />
    </div>
  )
}

export default Product
