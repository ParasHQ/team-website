import Link from 'next/link'

const Footer = () => {
	return (
		<div className="flex flex-wrap justify-between -mx-2 pb-4">
			<div className="flex flex-wrap text-white">
				<div className="p-2">
					<Link href="/">
						<a>About</a>
					</Link>
				</div>
				<div className="p-2">
					<Link href="/jobs">
						<a>Jobs</a>
					</Link>
				</div>
				<div className="p-2">
					<Link href="/partners">
						<a>Partners</a>
					</Link>
				</div>
			</div>
			<div>
				<div className="p-2">
					<p>(c) 2021 Paras</p>
				</div>
			</div>
		</div>
	)
}
export default Footer
