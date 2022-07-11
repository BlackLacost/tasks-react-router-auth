import { createTheme, ThemeProvider } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './features/Auth/AuthProvider'
import { RequireAdmin } from './features/Auth/RequireAdmin'
import { RequireAuth } from './features/Auth/RequireAuth'
import { AdminPage } from './pages/AdminPage'
import { DevicesPage } from './pages/DevicesPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        component: Link,
      },
    },
  },
})

// export const prefix = '/' + packagejson.homepage.split('/').pop()
// export const routes = {
//   home: prefix + '/',
//   shop: prefix + '/shop',
//   admin: prefix + '/admin',
//   login: prefix + '/login',
//   registration: prefix + '/registration',
//   profile: prefix + '/profile',
// }
export const routes = {
  home: '/',
  shop: '/shop',
  admin: '/admin',
  login: '/login',
  registration: '/registration',
  profile: '/profile',
}

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.shop} element={<DevicesPage />} />
            <Route
              path={routes.admin}
              element={
                <RequireAdmin>
                  <AdminPage />
                </RequireAdmin>
              }
            />
            <Route
              path={routes.profile}
              element={
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.registration} element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}
