import { Navigate, useLocation } from 'react-router-dom'
import { routes } from '../../App'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { useAuth } from './useAuth'

export const RequireAdmin = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={routes.login} state={{ from: location }} />
  }

  if (user.role !== 'ADMIN') {
    return <NotFoundPage />
  }
  return children
}
