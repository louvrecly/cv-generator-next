import { createContext, useState, useContext } from 'react'
import useSWR from 'swr'
import { fetchAndSet } from 'services/utils'

const Context = createContext()

export function WorkExperienceProvider({ children }) {
  const [workExperience, setWorkExperience] = useState(null)
  useSWR('api/work-experience', fetchAndSet(setWorkExperience, 'workExperience'))

  return <Context.Provider value={[workExperience, setWorkExperience]}>{children}</Context.Provider>
}

export function useWorkExperienceContext() {
  return useContext(Context)
}
