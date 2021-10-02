import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './icons/Logo'
import Hamburger from 'react-hamburgers'

const Nav = () => {
	const router = useRouter()
	const [showMobileNav, setShowMobileNav] = useState(false)

	const mobileNavRef = useRef()

	useEffect(() => {
		const onClickEv = (e) => {
			if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
				setShowMobileNav(false)
			}
		}

		if (showMobileNav) {
			document.body.addEventListener('click', onClickEv)
		}

		return () => {
			document.body.removeEventListener('click', onClickEv)
		}
	}, [showMobileNav])

	const isActiveNav = (path) => {
		if (router.asPath === path) {
			return `border-b-2 border-white`
		}
	}

	return (
		<div className="sticky top-0 py-4 bg-gray-900">
			<div className="max-w-5xl mx-auto relative z-20 px-2 flex items-center">
				<div className="w-1/6">
					<div className="w-24 relative z-10">
						<Link href="/">
							<a>
								<Logo />
							</a>
						</Link>
					</div>
				</div>
				<div className="w-4/6">
					<div className="flex justify-center">
						<div className="hidden md:flex text-white">
							<div className="px-8">
								<div className={`${isActiveNav('/')}`}>
									<Link href="/">About</Link>
								</div>
							</div>
							<div className="px-8">
								<div className={`${isActiveNav('/jobs')}`}>
									<Link href="/jobs">Jobs</Link>
								</div>
							</div>
							<div className="px-8">
								<div className={`${isActiveNav('/partners')}`}>
									<Link href="/partners">Partners</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block w-1/6">
					<a
						className="text-white hover:opacity-75"
						href="https://paras.id"
						target="_blank"
					>
						<span>Visit Paras</span>
						<span className="inline-block pl-2">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5 5V19H19V12H21V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H12V5H5ZM14 5V3H21V10H19V6.41L9.17 16.24L7.76 14.83L17.59 5H14Z"
									fill="white"
								/>
							</svg>
						</span>
					</a>
				</div>
				<div className="w-1/6 md:hidden flex justify-end">
					<Hamburger
						style={{
							padding: 0,
						}}
						active={showMobileNav}
						type="squeeze"
						onClick={() => setShowMobileNav(!showMobileNav)}
					/>
				</div>
			</div>
			<div className="md:hidden relative">
				<div
					ref={mobileNavRef}
					className="absolute bg-gray-900 border-b-2 border-white top-0 left-0 right-0 z-10 transform transform-gpu transition-transform duration-200"
					style={{
						'--tw-translate-y': showMobileNav ? `0%` : `-200%`,
					}}
				>
					<div className="text-white pt-2">
						<div className="p-2">
							<div className="text-center">
								<Link href="/">
									<a className={`${isActiveNav('/')} text-lg`}>About</a>
								</Link>
							</div>
						</div>
						<div className="p-2">
							<div className="text-center">
								<Link href="/jobs">
									<a className={`${isActiveNav('/jobs')} text-lg`}>Jobs</a>
								</Link>
							</div>
						</div>
						<div className="p-2">
							<div className="text-center">
								<Link href="/partners">
									<a className={`${isActiveNav('/partners')} text-lg`}>
										Partners
									</a>
								</Link>
							</div>
						</div>
						<div className="p-2 text-center">
							<a
								className="text-white text-lg hover:opacity-75"
								href="https://paras.id"
								target="_blank"
							>
								<span>Visit Paras</span>
								<span className="inline-block pl-2">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5 5V19H19V12H21V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H12V5H5ZM14 5V3H21V10H19V6.41L9.17 16.24L7.76 14.83L17.59 5H14Z"
											fill="white"
										/>
									</svg>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
