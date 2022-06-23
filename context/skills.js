import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function SkillsProvider({ children }) {
  const [skills, setSkills] = useState(null)

  useEffect(() => {
    fetch('api/skills')
      .then(res => res.json())
      .then(data => data.skills && setSkills(data.skills))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[skills, setSkills]}>{children}</Context.Provider>
}

export function useSkillsContext() {
  return useContext(Context)
}
