
import type { AppProps } from 'next/app'
import '../app/assets/styles/globals.scss'
import MainProvider from '@/providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
