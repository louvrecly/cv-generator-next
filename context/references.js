import { createContext, useState, useContext } from 'react'
import useSWR from 'swr'
import { fetchAndSet } from 'services/utils'

const Context = createContext()

export function ReferencesProvider({ children }) {
  const [references, setReferences] = useState(null)
  useSWR('api/references', fetchAndSet(setReferences, 'references'))

  return <Context.Provider value={[references, setReferences]}>{children}</Context.Provider>
}

export function useReferencesContext() {
  return useContext(Context)
}
