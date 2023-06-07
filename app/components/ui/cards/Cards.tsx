import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { IProduct, IProductDetails } from 'types/product.interface'

export const CAROUSELITEM_TEST_IDS = {
	CONTAINER: 'carouselItem-container',
	IMAGE: 'carouselItem-image',
	PRICE: 'carouselItem-price',
	TYPE: 'carouselItem-type',
	TITLE: 'carouselItem-title',
} as const

/**
 * ItemCard component
 */
export const ItemCard: React.FC<IProductDetails> = ({ product }) => (
	<div data-testid={CAROUSELITEM_TEST_IDS.CONTAINER}>
		<div className="relative h-[25rem] w-[25rem]">
			<a href={product.slug}>
				<Image
					fill
					data-testid={CAROUSELITEM_TEST_IDS.IMAGE}
					src={product.images[2]}
					alt={''}
				/>
			</a>
		</div>

		<div className="mt-[0.75rem] flex justify-between align-top">
			<div>
				<h4 className="font-bold" data-testid={CAROUSELITEM_TEST_IDS.TITLE}>
					{product.name}
				</h4>
				<p
					className="body-2 text-grey"
					data-testid={CAROUSELITEM_TEST_IDS.TYPE}
				>
					{product.type}
				</p>
			</div>

			<p className="body-3 text-grey" data-testid={CAROUSELITEM_TEST_IDS.PRICE}>
				{product.price}
			</p>
		</div>
	</div>
)
