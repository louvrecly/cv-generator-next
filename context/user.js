import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('api/user')
      .then(res => res.json())
      .then(data => data.user && setUser(data.user))
      .catch(error => alert(`Error - ${error.message}`))
  }, [])

  return <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
}

export function useUserContext() {
  return useContext(Context)
}
