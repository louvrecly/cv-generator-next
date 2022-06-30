import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch('api/projects')
      .then(res => res.json())
      .then(data => data.projects && setProjects(data.projects))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[projects, setProjects]}>{children}</Context.Provider>
}

export function useProjectsContext() {
  return useContext(Context)
}
