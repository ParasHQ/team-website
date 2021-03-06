import Open from '../components/icons/Open'
import Innovative from '../components/icons/Innovate'
import Reward from '../components/icons/Reward'
import Nav from '../components/Nav'
import axios from 'axios'
import { useEffect } from "react/cjs/react.production.min"

const CULTURE = [
  {
    title: `Open`,
    desc: `All information and knowledge are shared openly. We expect active participation from the team members to share their perspectives and comments across the organization.`,
  },
  {
    title: `Innovative`,
    desc: `Creativity can come from anywhere. We encourage the team members to create new ideas, making better solutions, and always open for any changes.`,
  },
  {
    title: `High Reward`,
    desc: `We offer competitive compensation for the team members. We make sure that high performing members are well compensated.`,
  },
]

const CultureIcon = ({ title }) => {
  if (title == 'Open') {
    return <Open />
  }
  if (title == 'Innovative') {
    return <Innovative />
  }
  if (title == 'High Reward') {
    return <Reward />
  }
}

export default function Jobs({ jobList }) {
  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-white ">
        <div>
          <p className="text-6xl font-bold mt-16">Join the Team</p>
          <p className="mt-4 text-gray-300">
            We are always looking for talented new members that push us to be
            bolder, dream bigger and perform better.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap -mx-4">
            {CULTURE.map((x, idx) => {
              return (
                <div key={idx} className="w-full lg:w-1/3 p-4">
                  <CultureIcon title={x.title} />
                  <p className="mt-2 text-3xl font-semibold">{x.title}</p>
                  <p className="mt-2 text-gray-300">{x.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-16">
          <p className="text-3xl font-bold">Jobs</p>
          <div className="flex flex-wrap -mx-4">
            {jobList.map((x, idx) => {
              return (
                <div key={idx} className="w-full md:w-1/3 p-4 hover:opacity-75">
                  <a href={x.url} target="_blank">
                    <div>
                      <span className="text-lg font-semibold">{x.title}</span>
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
                    </div>
                    <p className="mt-2 text-gray-300">{x.location}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const resp = await axios.get(
    `https://api.airtable.com/v0/appa27x5hhdRZLt0j/Job%20List?api_key=${process.env.AIRTABLE_API_KEY}`
  )
  return {
    props: {
      jobList: resp.data.records
        .map((r) => r.fields)
        .sort((a, b) => a.title.localeCompare(b.title)),
    },
    revalidate: 30
  }

}