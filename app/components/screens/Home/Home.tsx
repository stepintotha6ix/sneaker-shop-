import Heading from '@/components/ui/Heading/Heading'
import { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import imgWorld from '@/assets/images/world.png'
import AboutBlock from '@/components/ui/About-block/AboutBlock'
import ProductBlock from '@/components/ui/Product-block/ProductBlock'
import ContactBlock from '@/components/ui/Contact-block/ContactBlock'
import { products } from 'data/product.data'

import React from 'react'
import { CarouselShoes } from '@/components/ui/Carousel/CarouselShoes'

const Home: FC = () => {


	return (
		<section className={styles.section} >
			<div className={styles.title}>
				<div className={styles.firstBlock}>
					<Heading className="uppercase text-2xl mb-32 ">
						Stand out from the crowd with unique sneaker models
					</Heading>
					<Image height={53} src={imgWorld} alt={'world image'} />
				</div>

				<div className={styles.secondBlock}>
					<Heading className="uppercase text-8xl font-bold text-left ">
						<span>
							Loow
						</span>

						<span > sneakers & </span>

						<span >lovers</span>
					</Heading>
				</div>
			</div>
			<div className='mb-32'>
				<CarouselShoes />
			</div>

			<div className={styles.content}>
				<AboutBlock />
				<ProductBlock product={products[1]} />
				<ContactBlock />
			</div>
		</section>
	)
}

export default Home
