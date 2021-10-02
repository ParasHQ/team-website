import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css'
import '../styles/hamburgers.min.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Paras Team</title>
			</Head>
			<div>
				<Toaster />
			</div>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
