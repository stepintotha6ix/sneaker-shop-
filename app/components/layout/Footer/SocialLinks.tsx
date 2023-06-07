import styles from './Footer.module.scss'
import Link from 'next/link'
import React, { FC } from 'react'
import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'
const items = [
	{
		id: 0,
		image: <BsInstagram />,
		title: 'slug',
	},
	{
		id: 1,
		image: <BsYoutube />,
		title: 'slug',
	},
	{
		id: 2,
		image: <BsFacebook />,
		title: 'slug',
	},
	{
		id: 3,
		image: <BsInstagram />,
		title: 'slug',
	},
]

const SocialLinks: FC = () => {
	return (
		<ul className="flex">
			{items.map((item) => (
				<li className={styles.li}>
					<Link href={'/'}>{item.image}</Link>
				</li>
			))}
		</ul>
	)
}

export default SocialLinks
