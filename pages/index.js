import useSWR from 'swr'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const userRes = useSWR('api/user', fetcher)
  const referencesRes = useSWR('api/references', fetcher)
  const skillsRes = useSWR('api/skills', fetcher)

  return (
    <div className="mx-8 py-12 h-full max-w-screen-sm break-words md:mx-auto lg:max-w-[960px]">
      <>
        {
          userRes.error
            ? <p>Failed to Load Data</p>
            : !userRes.data
            ? <p>Loading...</p>
            : <UserInfoBar user={userRes.data.user} />
        }
      </>

      <>
        {
          referencesRes.error
            ? <p>Failed to Load Data</p>
            : !referencesRes.data
            ? <p>Loading...</p>
            : <ReferencesSection references={referencesRes.data.references} />
        }
      </>

      <>
        {
          skillsRes.error
            ? <p>Failed to Load Data</p>
            : !skillsRes.data
            ? <p>Loading...</p>
            : <SkillsSection skills={skillsRes.data.skills} />
        }
      </>
    </div>
  )
}
