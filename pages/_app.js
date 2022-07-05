import { useState } from 'react'
import DataContext from 'context/data'
import DefaultLayout from 'components/layouts/default'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [references, setReferences] = useState(null)
  const [skills, setSkills] = useState(null)
  const [education, setEducation] = useState(null)
  const [workExperience, setWorkExperience] = useState(null)
  const [portfolio, setPortfolio] = useState(null)
  const [activities, setActivities] = useState(null)

  const value = {
    state: { user, references, skills, education, workExperience, portfolio, activities },
    setters: { setUser, setReferences, setSkills, setEducation, setWorkExperience, setPortfolio, setActivities }
  }

  return (
    <DataContext.Provider value={value}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DataContext.Provider>
  )
}

export default MyApp
