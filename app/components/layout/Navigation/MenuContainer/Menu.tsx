import { FC } from 'react'
import { IMenu } from './menu.types'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Menu
