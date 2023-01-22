import { useContext, useEffect } from 'react'
import DataContext from 'context/data'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import EducationSection from 'components/EducationSection'
import PortfolioSection from 'components/PortfolioSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import ActivitiesSection from 'components/ActivitiesSection'

export default function Home() {
  const { state, setters } = useContext(DataContext)
  const {
    user,
    references,
    education,
    portfolio,
    workExperience,
    activities,
  } = state
  const {
    setUser,
    setReferences,
    setEducation,
    setPortfolio,
    setWorkExperience,
    setActivities,
  } = setters

  useEffect(() => {
    const payloads = [
      { endpoint: 'user', field: 'user', setter: setUser },
      { endpoint: 'references', field: 'references', setter: setReferences },
      { endpoint: 'education', field: 'education', setter: setEducation },
      { endpoint: 'portfolio', field: 'portfolio', setter: setPortfolio },
      { endpoint: 'work-experience', field: 'workExperience', setter: setWorkExperience },
      { endpoint: 'activities', field: 'activities', setter: setActivities },
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
    setEducation,
    setPortfolio,
    setWorkExperience,
    setActivities,
  ])

  return (
    <div className="mx-8 py-5">
      <UserInfoBar user={user} setUser={setUser} />

      <div>
        <ReferencesSection references={references} setReferences={setReferences} />

        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <EducationSection education={education} setEducation={setEducation} />

        <PortfolioSection portfolio={portfolio} setPortfolio={setPortfolio} />

        <ActivitiesSection activities={activities} setActivities={setActivities} />
      </div>
    </div>
  )
}
