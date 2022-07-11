import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import {
  Link as LinkRouter,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { routes } from '../App'
import { useAuth } from '../features/Auth/useAuth'

export const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)
  return (
    <>
      <AppBar color="default" position="sticky">
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" spacing={2}>
              <Link to={routes.home} color="text.primary">
                <Typography variant="h6">Главная</Typography>
              </Link>
              <Link to={routes.shop} color="text.primary">
                <Typography variant="h6">Магазин</Typography>
              </Link>
            </Stack>
            {user ? (
              <>
                <IconButton onClick={(e) => setAnchorEl(e.target)}>
                  <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                </IconButton>
                <Menu
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
                >
                  {user.role === 'ADMIN' && (
                    <MenuItem
                      to={routes.admin}
                      component={LinkRouter}
                      onClick={() => setAnchorEl(null)}
                    >
                      Админ панель
                    </MenuItem>
                  )}
                  <MenuItem
                    to={routes.profile}
                    component={LinkRouter}
                    onClick={() => setAnchorEl(null)}
                  >
                    Профиль
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout()
                      navigate(routes.home, { replace: true })
                    }}
                  >
                    Выйти
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  navigate(routes.login, {
                    state: { from: location },
                    replace: true,
                  })
                }
              >
                Войти
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
