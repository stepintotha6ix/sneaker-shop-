import { formatToCurrency } from '@/utils/format-to-currency'
import React, { FC } from 'react'
import { ICartItem } from 'types/cart.interface'

import Image from 'next/image'
import styles from './CartItem.module.scss'
import CartActions from './cart-actions/CartActions'
const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[2]}
				width={150}
				height={150}
				alt={item.product.name}
			/>
			<div className={styles.block}>
				<div className={styles.mainInfo}>
					<div className={styles.name}>{item.product.name}</div>

					<div className={styles.price}>
						{formatToCurrency(item.product.price)}
					</div>
				</div>
				<div className={styles.secondInfo}>
					<div>{item.product.type}</div>
					<div className={styles.detailsInfo}>
						<div className={styles.variations}>Size: {item.size}</div>
						<CartActions item={item} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
