import HomeBacker from '../components/Home/Backer'
import HomeTeam from '../components/Home/Team'
import Nav from '../components/Nav'

export default function Home() {
	return (
		<>
			<Nav />
			<div className="max-w-5xl mx-auto px-4 md:px-8 text-white ">
				<div className="flex flex-wrap items-center mt-8">
					<div className="w-full lg:w-1/2 order-2 lg:order-1">
						<p className="text-6xl font-bold mt-8">
							Expanding the endgame of NFTs
						</p>
						<div className="mt-8 text-gray-300">
							<p>
								Alongside the rise of NFTs in 2021, we believe that NFTs are
								still at an early stage. The blockchain technology and smart
								contract capabilities could in fact create better experiences
								for many verticals that could not be facilitated by its web 2.0
								counterparts. We envision Paras to be the beginning of NFTs
								development.
							</p>
							<p className="mt-4">
								We want to produce and develop crypto-native IP as we believe
								that by creating new exclusive IPs, we could tailor and design
								new experiences of these mediums: comics, games, and toys.
								Giving utility and use cases over digital assets could create
								more value to collectors and creators.
							</p>
						</div>
					</div>
					<div className="w-full lg:w-1/2 order-1 lg:order-2 p-4">
						<img src="/home.png" className="w-full max-w-lg mx-auto" />
					</div>
				</div>

				<div className="mt-16">
					<HomeTeam />
				</div>
				<div className="mt-16">
					<HomeBacker />
				</div>
			</div>
		</>
	)
}
