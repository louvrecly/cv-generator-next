import { createContext, useState, useContext } from 'react'
import useSWR from 'swr'
import { fetchAndSet } from 'services/utils'

const Context = createContext()

export function SkillsProvider({ children }) {
  const [skills, setSkills] = useState(null)
  useSWR('api/skills', fetchAndSet(setSkills, 'skills'))

  return <Context.Provider value={[skills, setSkills]}>{children}</Context.Provider>
}

export function useSkillsContext() {
  return useContext(Context)
}
