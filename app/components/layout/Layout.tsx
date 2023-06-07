import { FC, useRef } from 'react'
import Navigation from './Navigation/Navigation'
import styles from './Layout.module.scss'
import Footer from './Footer/Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const Layout: FC = ({ children }) => {
	const ref = useRef()
	const options = {
		smooth: true,
	}

	return (
		<LocomotiveScrollProvider options={options} containerRef={ref}>
			<main data-scroll-container ref={ref}>
				<div className={styles.layout} data-scroll-section>
					<Navigation />

					<section className={styles.content}>{children}</section>
					<Footer />
				</div>
			</main>
		</LocomotiveScrollProvider>
	)
}

export default Layout
