import { products } from 'data/product.data'
import { FC, Suspense, useState } from 'react'
import ProductItem from './ProductItem'
import { IProduct, IProductDetails } from 'types/product.interface'
import styles from './Products.module.scss'
import cn from 'clsx'
import Sorting from './sorting/Sorting'
import { EnumSorting } from './sorting/Sorting.interface'

const Products: FC<IProductDetails> = ({ product }) => {
	const [open, setOpen] = useState(false)
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)
	console.log(sortType)
	return (
		<div className={styles.content}>
			<div>
				<div className={styles.title}>
					Men's Shoes & Sneakers ({products.length})
				</div>

				<div className={styles.sort}>
					<Sorting sortType={sortType} setSortType={setSortType} />
				</div>
			</div>

			<div className={styles.sneakersBlock}>
				{products.map((product) => (
					<ProductItem product={product} />
				))}
			</div>
		</div>
	)
}

export default Products
