import { FC } from 'react'
import styles from './Navigation.module.scss'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import MainButton from '../../ui/MainButton/MainButton'
import Cart from './Cart'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
			<MainButton>Log in</MainButton>
			<Cart/>
		</div>
	)
}

export default Navigation
