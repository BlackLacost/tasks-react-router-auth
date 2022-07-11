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

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<DevicesPage />} />
            <Route
              path="admin"
              element={
                <RequireAdmin>
                  <AdminPage />
                </RequireAdmin>
              }
            />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}
