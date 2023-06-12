import { useContext, useEffect } from 'react'
import DataContext from 'context/data'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import EducationSection from 'components/EducationSection'
import ActivitiesSection from 'components/ActivitiesSection'
import PortfolioSection from 'components/PortfolioSection'

export default function Home() {
  const { state, setters } = useContext(DataContext)
  const {
    user,
    references,
    workExperience,
    education,
    activities,
    portfolio,
  } = state
  const {
    setUser,
    setReferences,
    setWorkExperience,
    setEducation,
    setActivities,
    setPortfolio,
  } = setters

  useEffect(() => {
    const payloads = [
      { endpoint: 'user', field: 'user', setter: setUser },
      { endpoint: 'references', field: 'references', setter: setReferences },
      { endpoint: 'work-experience', field: 'workExperience', setter: setWorkExperience },
      { endpoint: 'education', field: 'education', setter: setEducation },
      { endpoint: 'activities', field: 'activities', setter: setActivities },
      { endpoint: 'portfolio', field: 'portfolio', setter: setPortfolio },
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
    setReferences,
    setWorkExperience,
    setEducation,
    setActivities,
    setPortfolio,
  ])

  return (
    <div className="mx-8 py-5">
      <UserInfoBar user={user} setUser={setUser} />

      <div>
        <ReferencesSection references={references} setReferences={setReferences} />

        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <PortfolioSection portfolio={portfolio} setPortfolio={setPortfolio} />

        <EducationSection education={education} setEducation={setEducation} />

        <ActivitiesSection activities={activities} setActivities={setActivities} />
      </div>
    </div>
  )
}
