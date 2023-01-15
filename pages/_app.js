import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import DataContext from 'context/data'
import DefaultLayout from 'components/layouts/default'
import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fas)
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [references, setReferences] = useState(null)
  const [skills, setSkills] = useState(null)
  const [education, setEducation] = useState(null)
  const [portfolio, setPortfolio] = useState(null)
  const [workExperience, setWorkExperience] = useState(null)
  const [activities, setActivities] = useState(null)

  const value = {
    state: { user, references, skills, education, portfolio, workExperience, activities },
    setters: { setUser, setReferences, setSkills, setEducation, setPortfolio, setWorkExperience, setActivities }
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
