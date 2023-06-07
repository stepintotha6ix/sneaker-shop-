import Image from 'next/image'
import React, { FC, useState } from 'react'
import { IProductDetails } from 'types/product.interface'
import styles from './ProductPage.module.scss'
import cn from 'clsx'
const ProductGallery: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	return (
		<div className="flex">
			<div className="mr-4 ">
				{product.images.map((item, index) => (
					<Image
						onClick={() => setCurrentImageIndex(index)}
						className={cn(styles.itemGallery, {
							[styles.active]: index === currentImageIndex,
						})}
						width={120}
						height={120}
						src={item}
						alt={''}
					/>
				))}
			</div>
			<Image
				className="rounded-xl"
				width={600}
				height={600}
				src={product.images[currentImageIndex]}
				alt={''}
			/>
		</div>
	)
}

export default ProductGallery
