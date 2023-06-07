import Products from '@/components/screens/products/Products'
import { products } from 'data/product.data'
import { NextPage } from 'next'
import React from 'react'
import { IProductDetails } from 'types/product.interface'

const ProductsPage: NextPage<IProductDetails> = ({product}) => {
  return (
    <Products product={product}/>
  )
}

export default ProductsPage