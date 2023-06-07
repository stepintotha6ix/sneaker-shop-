import React, { FC } from 'react'
import { IProduct } from 'types/product.interface'
import Image from 'next/image';
import ProductGallery from './ProductGallery';
import ProductInfo from './product-info/ProductInfo';
 import styles from './ProductPage.module.scss'
import { CarouselShoes } from '@/components/ui/Carousel/CarouselShoes';
const ProductPage:FC<{product: IProduct}> = ({product}) => {

  return (<>
    <div className={styles.block}>
    <ProductGallery product={product}/>
    <ProductInfo product={product}/>
    </div>
    <div><CarouselShoes/></div>
    </>
  )
}

export default ProductPage