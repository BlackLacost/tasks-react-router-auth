import { Navigate, useLocation } from 'react-router-dom'
import { routes } from '../../App'
import { useAuth } from './useAuth'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={routes.login} state={{ from: location }} />
  }
  return children
}
