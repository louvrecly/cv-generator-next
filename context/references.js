import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function ReferencesProvider({ children }) {
  const [references, setReferences] = useState(null)

  useEffect(() => {
    fetch('api/references')
      .then(res => res.json())
      .then(data => data.references && setReferences(data.references))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[references, setReferences]}>{children}</Context.Provider>
}

export function useReferencesContext() {
  return useContext(Context)
}
