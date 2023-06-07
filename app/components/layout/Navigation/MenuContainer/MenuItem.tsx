import Link from 'next/link'
import { FC } from 'react'
import { IMenuItem } from './menu.types'
import cn from 'clsx'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const {asPath }= useRouter() 
	return (
		<li>
			<Link href={item.link} className={cn({
				[styles.active]: asPath === item.link,
			})}>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
