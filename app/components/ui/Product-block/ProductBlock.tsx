import { FC } from 'react'
import styles from './ProductBlock.module.scss'
import { IProduct } from 'types/product.interface'
import Image from 'next/image'
import MainButton from '../MainButton/MainButton'

const ProductBlock: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.block}>
			<Image
				
				width={300}
				height={300}
				src={product.images[0]}
				alt={'sneaker'}
			/>

			<div className={styles.text}>
				<div className={styles.title}>{product.name}</div>
				<div>
					${product.price} / {product.sizes.length} sizes
				</div>
				<div className={styles.button}>
					<MainButton>Buy</MainButton>
				</div>
			</div>
		</div>
	)
}

export default ProductBlock
