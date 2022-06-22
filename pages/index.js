import { useState } from 'react'
import useSWR from 'swr'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import EducationSection from 'components/EducationSection'

const fetchAndSet = (setter, key) => (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(json => json[key] && setter(json[key]))
    .catch(error => console.log({ error }))

export default function Home() {
  const [user, setUser] = useState(null)
  const [references, setReferences] = useState(null)
  const [skills, setSkills] = useState(null)
  const [workExperience, setWorkExperience] = useState(null)
  const [education, setEducation] = useState(null)

  useSWR('api/user', fetchAndSet(setUser, 'user'))
  useSWR('api/references', fetchAndSet(setReferences, 'references'))
  useSWR('api/skills', fetchAndSet(setSkills, 'skills'))
  useSWR('api/work-experience', fetchAndSet(setWorkExperience, 'workExperience'))
  useSWR('api/education', fetchAndSet(setEducation, 'education'))

  return (
    <div className="mx-8 py-8 h-full md:h-[1485px] md:flex md:flex-col md:overflow-hidden">
      <UserInfoBar user={user} />

      <div className="md:flex-1 md:flex md:flex-col md:flex-wrap md:gap-x-3 md:overflow-scroll">
        <ReferencesSection references={references} />

        <SkillsSection skills={skills} />

        <WorkExperienceSection workExperience={workExperience} />

        <EducationSection education={education} />
      </div>
    </div>
  )
}
