import { FC } from 'react'
import styles from './ContactBlock.module.scss'
import Image from 'next/image'

const ContactBlock: FC = () => {
	return (
		<div>
			<Image
				className={styles.pic}
				width={450}
				height={450}
				alt="funky"
				src={'/funnyfacee.png'}
			/>

			<div className={styles.block}></div>
			<a className={styles.link} href='https://sneakerhead.ru/'  target="_blank">
				<Image width={40} height={40} src={'svg/qrcode.svg'} alt={'qrcode'} />
				<div className="ml-3">
					<div >
						<h3>Join us</h3>
						<span>Friendly community</span>
					</div>
				</div>
			</a>
		</div>
	)
}

export default ContactBlock
