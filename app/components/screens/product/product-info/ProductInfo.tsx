import React, { FC, useState } from 'react'
import { IProductDetails } from 'types/product.interface'
import styles from './ProductInfo.module.scss'
import { formatToCurrency } from '@/utils/format-to-currency'
import AddToCartButton from '@/components/ui/AddToCartButton/AddToCartButton'
import { TypeSize } from '@/store/cart/cart.types'
import cn from 'clsx'
const SIZES: TypeSize[] = [ 35 ,36, 37, 38, 39 , 40 , 41 , 42 , 43 , 44 , 45] 


const ProductInfo: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>(41)
	return (
		<div className={styles.info}>
			<h2>{product.name}</h2>
			<h3>Articul: {product.code}</h3>

			<div className={styles.price}>{formatToCurrency(product.price)}</div>
			<div className={styles.sizes}>
				<h2>Select Size</h2>
				<div className={styles.block}>
					{SIZES.map((size) => (
						
							<button key={size} 	className={cn({ [styles.active]: selectedSize === size })} onClick={() => setSelectedSize(size)}>{size}</button>
						
					))}
				</div>
			</div>
			<AddToCartButton product={product} selectedSize={selectedSize} />
				
		</div>
	)
}

export default ProductInfo
