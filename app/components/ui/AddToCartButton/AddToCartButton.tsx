import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { TypeSize } from '@/store/cart/cart.types'
import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'
import { IProduct } from 'types/product.interface'

interface ICartButton {
	product: IProduct
	selectedSize: TypeSize
}

const AddToCartButton: FC<ICartButton> = ({ product, selectedSize }) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		(cartItem) =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)

	return (
		<div>
			<Button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								size: selectedSize,
						  })
				}
			>
				{currentElement ? 'Remove from bag' : 'Add to bag'}
			</Button>
		</div>
	)
}

export default AddToCartButton
