import { useState } from 'react'
import DataContext from 'context/data'
import DefaultLayout from 'components/layouts/default'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState()
  const [references, setReferences] = useState()
  const [skills, setSkills] = useState()
  const [education, setEducation] = useState()
  const [workExperience, setWorkExperience] = useState()
  const [projects, setProjects] = useState()

  const value = {
    state: { user, references, skills, education, workExperience, projects },
    setters: { setUser, setReferences, setSkills, setEducation, setWorkExperience, setProjects }
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
