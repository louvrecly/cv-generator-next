import { createContext, useState, useContext } from 'react'
import useSWR from 'swr'
import { fetchAndSet } from 'services/utils'

const Context = createContext()

export function EducationProvider({ children }) {
  const [education, setEducation] = useState(null)
  useSWR('api/education', fetchAndSet(setEducation, 'education'))

  return <Context.Provider value={[education, setEducation]}>{children}</Context.Provider>
}

export function useEducationContext() {
  return useContext(Context)
}
