import { useContext, useEffect } from 'react'
import DataContext from '@/context/data'
import UserInfoBar from '@/components/UserInfoBar'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import EducationSection from '@/components/EducationSection'
import ActivitiesSection from '@/components/ActivitiesSection'
import PortfolioSection from '@/components/PortfolioSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {
  const { state, setters } = useContext(DataContext)
  const {
    user,
    workExperience,
    education,
    activities,
    portfolio,
    skills
  } = state
  const {
    setUser,
    setWorkExperience,
    setEducation,
    setActivities,
    setPortfolio,
    setSkills,
  } = setters

  useEffect(() => {
    const payloads = [
      { endpoint: 'user', field: 'user', setter: setUser },
      { endpoint: 'work-experience', field: 'workExperience', setter: setWorkExperience },
      { endpoint: 'education', field: 'education', setter: setEducation },
      { endpoint: 'activities', field: 'activities', setter: setActivities },
      { endpoint: 'portfolio', field: 'portfolio', setter: setPortfolio },
      { endpoint: 'skills', field: 'skills', setter: setSkills },
    ]

    Promise.all(
      payloads.map(
        payload =>
          fetch(`api/${payload.endpoint}`)
            .then(res => res.json())
            .then(data => data[payload.field] && payload.setter(data[payload.field]))
            .catch(error => `Error - ${error.message}`)
      )
    )
  }, [
    setUser,
    setWorkExperience,
    setEducation,
    setActivities,
    setPortfolio,
    setSkills,
  ])

  return (
    <div className="mx-8 py-4">
      <UserInfoBar user={user} setUser={setUser} />

      <div>
        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <PortfolioSection portfolio={portfolio} setPortfolio={setPortfolio} />

        <EducationSection education={education} setEducation={setEducation} />

        <ActivitiesSection activities={activities} setActivities={setActivities} />

        <SkillsSection skills={skills} setSkills={setSkills} />
      </div>
    </div>
  )
}
