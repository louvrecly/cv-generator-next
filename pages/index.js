import useSWR from 'swr'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import EducationSection from 'components/EducationSection'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const userRes = useSWR('api/user', fetcher)
  const referencesRes = useSWR('api/references', fetcher)
  const skillsRes = useSWR('api/skills', fetcher)
  const workExperienceRes = useSWR('api/work-experience', fetcher)
  const educationRes = useSWR('api/education', fetcher)

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

      <div>
        {
          referencesRes.error
            ? <p>Failed to Load Data</p>
            : !referencesRes.data
            ? <p>Loading...</p>
            : <ReferencesSection references={referencesRes.data.references} />
        }
        {
          skillsRes.error
            ? <p>Failed to Load Data</p>
            : !skillsRes.data
            ? <p>Loading...</p>
            : <SkillsSection skills={skillsRes.data.skills} />
        }
        {
          workExperienceRes.error
            ? <p>Failed to Load Data</p>
            : !workExperienceRes.data
            ? <p>Loading...</p>
            : <WorkExperienceSection workExperience={workExperienceRes.data.workExperience} />
        }
        {
          educationRes.error
            ? <p>Failed to Load Data</p>
            : !educationRes.data
            ? <p>Loading...</p>
            : <EducationSection education={educationRes.data.education} />
        }
      </div>
    </div>
  )
}
