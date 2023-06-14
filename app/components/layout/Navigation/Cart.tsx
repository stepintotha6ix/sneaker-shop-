import { FC } from 'react'
import { BsBag } from 'react-icons/bs'

const Cart: FC = () => {
	return (
		<a href="/cart" className='mt-[9px]'>
			<BsBag  />
		</a>
	)
}

export default Cart
