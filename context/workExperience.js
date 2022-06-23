import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function WorkExperienceProvider({ children }) {
  const [workExperience, setWorkExperience] = useState(null)

  useEffect(() => {
    fetch('api/work-experience')
      .then(res => res.json())
      .then(data => data.workExperience && setWorkExperience(data.workExperience))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[workExperience, setWorkExperience]}>{children}</Context.Provider>
}

export function useWorkExperienceContext() {
  return useContext(Context)
}
