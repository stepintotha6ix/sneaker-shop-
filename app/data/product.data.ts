import { IProduct } from './../types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Mizuno Wave Rider 10',
		slug: 'wave-rider-10-D1GA227701',
		images: [
			'/mizunoRider101.jpg',
			'/mizunoRider102.jpg',
			'/mizunoRider103.jpg',
		],
		price: 220,
		sizes: [6, 7, 8, 9, 10],
		code: 'D1GA227701',
		type: 'sneaker',
		brand: 'mizuno'
	},
	{
		id: 2,
		name: 'Jordan 4 Retro SE',
		slug: '4-retro-se-DV3742-021',
		images: [
			'/jordan4retroSE1.jpg',
			'/jordan4retroSE2.jpg',
			'/jordan4retroSE3.jpg',
		],
		price: 490,
		sizes: [6, 7, 8, 9, 10],
		code: 'DV3742-021',
		type: 'sneaker',
		brand: 'nike'
	},
	{
		id: 3,
		name: 'Nike Air Max 95 QS',
		slug: 'air-max-95-qs-DM0012-600',
		images: [
			'/airMax95qs1.jpg',
			'/airMax95qs2.jpg',
			'/airMax95qs3.jpg',
		],
		price: 290,
		sizes: [8, 9, 10, 11.5, 13],
		code: 'DV3742-021',
		type: 'sneaker',
		brand: 'nike'
	},
	{
		id: 4,
		name: 'adidas Originals Stan Smith',
		slug: 'stan-smith-FX5502',
		images: [
			'/stanSmith1.jpg',
			'/stanSmith2.jpg',
			'/stanSmith3.jpg',
			
		],
		price: 140,
		sizes: [8.5, 9, 10.5, 11],
		code: 'FX5502',
		type: 'sneaker',
		brand: 'adidas'
	},
	{
		id: 4,
		name: 'adidas Originals Stan Smith',
		slug: 'stan-smith-FX5502',
		images: [
			'/stanSmith1.jpg',
			'/stanSmith2.jpg',
			'/stanSmith3.jpg',
			
		],
		price: 140,
		sizes: [8.5, 9, 10.5, 11],
		code: 'FX5502',
		type: 'sneaker',
		brand: 'adidas'
	},
]
