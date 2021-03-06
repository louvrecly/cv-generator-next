import { useContext, useEffect } from 'react'
import DataContext from 'context/data'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'
import EducationSection from 'components/EducationSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import PortfolioSection from 'components/PortfolioSection'
import ActivitiesSection from 'components/ActivitiesSection'

export default function Home() {
  const { state, setters } = useContext(DataContext)
  const { user, references, skills, education, workExperience, portfolio, activities } = state
  const { setUser, setReferences, setSkills, setEducation, setWorkExperience, setPortfolio, setActivities } = setters

  useEffect(() => {
    const payloads = [
      { endpoint: 'user', field: 'user', setter: setUser },
      { endpoint: 'references', field: 'references', setter: setReferences },
      { endpoint: 'skills', field: 'skills', setter: setSkills },
      { endpoint: 'education', field: 'education', setter: setEducation },
      { endpoint: 'work-experience', field: 'workExperience', setter: setWorkExperience },
      { endpoint: 'portfolio', field: 'portfolio', setter: setPortfolio },
      { endpoint: 'activities', field: 'activities', setter: setActivities }
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
  }, [setUser, setReferences, setSkills, setEducation, setWorkExperience, setPortfolio, setActivities])

  return (
    <div className="mx-8 py-8 h-full md:h-[1485px] md:flex md:flex-col md:overflow-hidden">
      <UserInfoBar user={user} setUser={setUser} />

      <div className="md:flex-1 md:flex md:flex-col md:flex-wrap md:content-between md:gap-x-3 md:overflow-scroll">
        <ReferencesSection references={references} setReferences={setReferences} />

        <SkillsSection skills={skills} setSkills={setSkills} />

        <EducationSection education={education} setEducation={setEducation} />

        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <PortfolioSection portfolio={portfolio} setPortfolio={setPortfolio} />

        <ActivitiesSection activities={activities} setActivities={setActivities} />
      </div>
    </div>
  )
}
