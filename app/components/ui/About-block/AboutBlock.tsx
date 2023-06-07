import { FC } from 'react'
import styles from './AboutBlock.module.scss'
import Image from 'next/image'

const AboutBlock: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.subtitle}>
				<span>learn more</span>
				<Image width={40} height={40} src={'svg/arrow.svg'} alt={'arrow'} />
			</div>
			<div className={styles.content}>
				<div className={styles.numbers}>0 - nihuya</div>
				<div className={styles.text}>Pairs of shoes we sold last month alone</div>
			</div>
		</div>
	)
}

export default AboutBlock
