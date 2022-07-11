import { AuthContext } from './AuthProvider'

const { useContext } = require('react')

export function useAuth() {
  return useContext(AuthContext)
}
