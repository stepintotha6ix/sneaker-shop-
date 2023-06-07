import { FC } from 'react'
import { IProductDetails } from 'types/product.interface'
import Image from 'next/image'
import styles from './Products.module.scss'
const ProductItem: FC<IProductDetails> = ({ product }) => {
	return (
		
		<a href={product.slug} className={styles.product}>
			<div className={styles.image}>
				<Image
					className="rounded-3xl "
					width={300}
					height={300}
					src={product.images[2]}
					alt={'Image'}
				/>

				
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{product.name}</div>
				<div>${product.price}</div>
			</div>
		</a>
		
	)
}

export default ProductItem
