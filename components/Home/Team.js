const TEAM = [
  {
    title: 'Leadership',
    list: [
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
    ],
  },
  {
    title: 'Engineer',
    list: [
      {
        name: 'Irfi',
        title: 'Engineer Lead',
        img: '/team/irfi.jpg',
      },
      {
        name: 'Ahnaf',
        title: 'Developer',
        img: '/team/ahnaf.jpg',
      },
      {
        name: 'Edo',
        title: 'Developer',
        img: '/team/edo.jpg',
      },
      {
        name: 'Iqbal',
        title: 'Developer',
        img: '/team/iqbal.jpg',
      },
      {
        name: 'Jon',
        title: 'Developer',
        img: '/team/jon.jpg',
      },
      {
        name: 'Yues',
        title: 'Developer',
        img: '/team/yues.jpg',
      },
    ],
  },
  {
    title: 'Community & Marketing',
    list: [
      {
        name: 'Andini',
        title: 'Community Manager',
        img: '/team/andini.jpg',
      },
      {
        name: 'Venna',
        title: 'Social Media',
        img: '/team/venna.jpg',
      },
      {
        name: 'Bella',
        title: 'Marketing',
        img: '/team/bella.jpg',
      },
    ],
  },
  {
    title: 'Investment & Partnership',
    list: [
      {
        name: 'Rezha',
        title: 'Investment & Partnership Lead',
        img: '/team/rezha.jpg',
      },
      {
        name: 'Vincent',
        title: 'Business Development',
        img: '/team/vincent.jpg',
      },
      {
        name: 'Fidel',
        title: 'Business Development',
        img: '/team/fidel.jpg',
      },
    ],
  },
  {
    title: 'Paras Comic',
    list: [
      {
        name: 'Herrad',
        title: 'Paras Comic Lead',
        img: '/team/herrad.jpg',
      },
      {
        name: 'Linda',
        title: 'Editor',
        img: '/team/linda.jpg',
      },
      {
        name: 'Stefani',
        title: 'Editor',
        img: '/team/stefani.jpg',
      },
      {
        name: 'Yoseph',
        title: 'Editor',
        img: '/team/yoseph.jpg',
      },
      {
        name: 'Inggita',
        title: 'Marketing',
        img: '/team/inggita.jpg',
      },
      {
        name: 'Wenny',
        title: 'Graphic Designer',
        img: '/team/wenny.jpg',
      },
      {
        name: 'Syaskia',
        title: 'Social Media',
        img: '/team/syaskia.jpg',
      },
    ],
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
      <div className="flex flex-wrap">
        {TEAM.map((x, idx) => {
          return (
            <div key={idx}>
              <p className="text-xl mt-6 font-bold">{x.title}</p>
              <div className="flex flex-wrap -mx-4">
                {x.list.map((y) => {
                  return (
                    <div key={y.name} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
                      <img src={y.img} className="rounded-md" />
                      <p className="text-xl mt-2">{y.name}</p>
                      <p className="text-sm text-gray-300">{y.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div></div>
    </div>
  )
}

export default HomeTeam
