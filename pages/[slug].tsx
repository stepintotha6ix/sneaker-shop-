import ProductPage from '@/components/screens/product/ProductPage'
import { products } from 'data/product.data'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IProduct, IProductDetails } from 'types/product.interface'


const Product:NextPage<IProductDetails> = ({product}) => {
  
  return (
    <ProductPage product={product}/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	
	const paths = products.map(product => {
		return {
			params: { slug: product.slug },
		}
	})
	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params,
}) => {
	const product =
		products.find((product) => product.slug === params?.slug) ||
		({} as IProduct)

	return {
		props: {
			product,
		},
	}
}


export default Product