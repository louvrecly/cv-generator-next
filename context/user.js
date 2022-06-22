import { createContext, useState, useContext } from 'react'
import useSWR from 'swr'
import { fetchAndSet } from 'services/utils'

const Context = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  useSWR('api/user', fetchAndSet(setUser, 'user'))

  return <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
}

export function useUserContext() {
  return useContext(Context)
}
