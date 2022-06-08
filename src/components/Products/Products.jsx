import React from 'react'

import Product from './Product/Product'
import image from '../../assets/blueBirdPlectrums.jpg'

const products = {
  id: 1,
  name: 'Bluebird Picks',
  description: 'Re-Purposed Vintage Feel, Made to Order.',
  price: '$25',
  img: image,
}

const Products = () => {
  return (
    <main>
      <Product products={products} />
    </main>
  )
}

export default Products
