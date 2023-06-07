import { FC } from 'react'
import Layout from '../components/layout/Layout'

const MainProvider: FC = ({ children }) => {
	return <Layout>{children}</Layout>
}

export default MainProvider
