import { useCart } from '@/hooks/useCart'
import { FC } from 'react'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'
import { formatToCurrency } from '@/utils/format-to-currency'
import SummaryBlock from './SummaryBlock'
const Cart: FC = () => {
	const { cart, total } = useCart()
	return (
		<div className={styles.block}>
			<div className={styles.cart}>
				<h1>Bag</h1>
				{cart.length ? (
					cart.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<div>There are no items in your bag.</div>
				)}
			</div>
			<SummaryBlock total={total}/>
		</div>
	)
}

export default Cart
