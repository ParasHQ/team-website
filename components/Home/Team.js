const TEAM = [
	{
		name: 'Riqi',
		title: 'CEO',
		img: '/team/riqi.jpg',
	},
	{
		name: 'Afiq',
		title: 'Content Director',
		img: '/team/afiq.jpg',
	},
	{
		name: 'Andini',
		title: 'Community Manager',
		img: '/team/andini.jpg',
	},
	{
		name: 'Rezha',
		title: 'Business Manager',
		img: '/team/rezha.jpg',
	},
	{
		name: 'Irfi',
		title: 'Core Developer',
		img: '/team/irfi.jpg',
	},
	{
		name: 'Ahnaf',
		title: 'Core Developer',
		img: '/team/ahnaf.jpg',
	},
	{
		name: 'Ade',
		title: 'Developer',
		img: '/team/ade.jpg',
	},
	{
		name: 'Linda',
		title: 'Paras Comic',
		img: '/team/linda.jpg',
	},
	{
		name: 'Stefani',
		title: 'Paras Comic',
		img: '/team/stefani.jpg',
	},
	{
		name: 'Venna',
		title: 'Social Media',
		img: '/team/venna.jpg',
	},
	{
		name: 'Irene',
		title: 'Graphic Designer',
		img: '/team/irene.jpg',
	},
]

const HomeTeam = () => {
	return (
		<div>
			<p className="text-3xl font-bold">Team</p>
			<p className="text-gray-300 mt-2">
				Paras team is span across the globe, with headquarter in Jakarta,
				Indonesia. A group of passionate people that tries to move the creator's
				economy forward and bring blockchain to mainstream audience.
			</p>
			<div className="flex flex-wrap -mx-4">
				{TEAM.map((x, idx) => {
					return (
						<div key={idx} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
							<img src={x.img} className="rounded-md" />
							<p className="text-xl mt-2">{x.name}</p>
							<p className="text-sm text-gray-300">{x.title}</p>
						</div>
					)
				})}
			</div>
			<div></div>
		</div>
	)
}

export default HomeTeam
