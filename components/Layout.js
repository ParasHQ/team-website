import Footer from '../components/Footer'

const Layout = ({ children }) => {
	return (
		<div className="bg-gray-900 min-h-screen">
			{children}
			<div className="max-w-5xl mx-auto px-4 md:px-8 text-white mt-16">
				<Footer />
			</div>
		</div>
	)
}
export default Layout
