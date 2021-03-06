import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }

  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
