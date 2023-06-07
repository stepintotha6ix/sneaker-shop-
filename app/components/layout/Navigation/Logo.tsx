import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logoImage from '@/assets/images/sneaker.png'
import styles from './Navigation.module.scss'
const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			<Image
				src={logoImage}
				width={40}
				height={30}
				alt="sneaker logo"
				draggable={false}
			/>
			<span>LOOW</span>
		</Link>
	)
}

export default Logo
