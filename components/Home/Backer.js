import Link from 'next/link'

const BACKERS = [
	{
		name: 'Black Dragon Capital',
		website: 'https://blackdragon.io/',
		img: '/backers/1.png',
	},
	{
		name: 'Dragonfly Capital',
		website: 'https://www.dcp.capital/',
		img: '/backers/2.png',
	},
	{
		name: 'Digital Renaissance',
		website: 'https://www.drf.ee/',
		img: '/backers/3.png',
	},
	{
		name: 'Moonwhale Ventures',
		website: 'https://moonwhale.ventures/',
		img: '/backers/4.png',
	},
	{
		name: 'GFS Ventures',
		website: 'https://gfsblockchain.com/',
		img: '/backers/5.png',
	},
	{
		name: 'Global Coin Research',
		website: 'https://globalcoinresearch.com/',
		img: '/backers/6.png',
	},
	{
		name: 'YBB Foundation',
		website: 'http://ybb.io/',
		img: '/backers/7.png',
	},
	{
		name: 'D1 Ventures',
		website: 'http://d1.ventures/',
		img: '/backers/8.png',
	},
	{
		name: 'OKEx Blockdream Ventures',
		website: 'https://www.okex.com/blockdream-ventures',
		img: '/backers/9.png',
	},
	{
		name: 'HanDAO',
		website: 'https://discord.com/invite/xYH5rzcq3p',
		img: '/backers/10.png',
	},
	{
		name: 'Kernel Ventures',
		website: 'https://www.kernel-ventures.com/',
		img: '/backers/11.png',
	},
	{
		name: 'Infinity Capital',
		website: 'https://www.infinitycapital.info/',
		img: '/backers/12.png',
	},
]

const ANGELS = [
	{
		name: 'NEAR',
		website: 'https://near.org/',
		img: '/angels/1.png',
	},
	{
		name: 'Yield Guild',
		website: 'https://yieldguild.io/',
		img: '/angels/2.png',
	},
	{
		name: 'Pintu',
		website: 'https://pintu.co.id/',
		img: '/angels/3.png',
	},
	{
		name: 'Republic',
		website: 'https://republic.com/',
		img: '/angels/4.png',
	},
	{
		name: 'Heliax',
		website: 'https://heliax.dev/',
		img: '/angels/5.png',
	},
]

const HomeBacker = () => {
	return (
		<div>
			<p className="text-3xl font-bold">Backers</p>
			<p className="mt-4 text-xl text-center font-semibold">Ventures</p>
			<div className="flex flex-wrap -mx-4">
				{BACKERS.map((x, idx) => {
					return (
						<div key={idx} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
							<a href={x.website} target="_blank">
								<div className="w-32 h-32 m-auto flex justify-center items-center">
									<img src={x.img} className="object-contain" />
								</div>
							</a>
						</div>
					)
				})}
			</div>
			<p className="mt-4 text-xl text-center font-semibold">Angels</p>
			<div className="flex flex-wrap -mx-4">
				{ANGELS.map((x, idx) => {
					return (
						<div key={idx} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
							<a href={x.website} target="_blank">
								<div className="w-20 h-20 m-auto flex justify-center items-center">
									<img src={x.img} className="object-contain" />
								</div>
							</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HomeBacker
