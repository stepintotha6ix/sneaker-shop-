import React, { FC } from 'react'
import { IProductDetails } from 'types/product.interface'
import styles from './ProductInfo.module.scss'
import { formatToCurrency } from '@/utils/format-to-currency'
import MainButton from '@/components/ui/MainButton/MainButton'

const ProductInfo: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.info}>
			<h2>{product.name}</h2>
			<h3>Articul: {product.code}</h3>
			
			<div className={styles.price}>{formatToCurrency(product.price)}</div>
			<div className={styles.sizes}>
				<h2>Select Size</h2>
				<ul>
					{product.sizes.map((size) => (
						<li key={size}>UK {size}</li>
					))}
				</ul>
			</div>
            <MainButton >Add to bag</MainButton>
		</div>
	)
}

export default ProductInfo
