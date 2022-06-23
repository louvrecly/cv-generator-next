import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function EducationProvider({ children }) {
  const [education, setEducation] = useState(null)

  useEffect(() => {
    fetch('api/education')
      .then(res => res.json())
      .then(data => data.education && setEducation(data.education))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[education, setEducation]}>{children}</Context.Provider>
}

export function useEducationContext() {
  return useContext(Context)
}
