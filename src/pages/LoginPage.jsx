import {
  Box,
  Button,
  FormControlLabel,
  Link,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../App'
import { useAuth } from '../features/Auth/useAuth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const fromPage = location.state?.from?.pathname || routes.home

  const isLogin = location.pathname === routes.login

  const submitHandler = (e) => {
    e.preventDefault()
    const form = e.target
    login({ name: form.username.value, role: form.role.value })
    navigate(fromPage, { replace: true })
  }

  return (
    <Box
      bgcolor="lightgray"
      height="100vh"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Paper>
        <Stack p={5} spacing={2}>
          <Typography alignSelf="center" variant="h4" component="h1">
            {isLogin ? 'Войти' : 'Регистрация'}
          </Typography>
          <form onSubmit={submitHandler}>
            <Stack direction="column" spacing={1}>
              <TextField
                label="Имя пользователя"
                name="username"
                required
                placeholder="BlackLacost"
              />
              <RadioGroup name="role" defaultValue="USER">
                <FormControlLabel
                  value="USER"
                  control={<Radio />}
                  label="Пользователь"
                />
                <FormControlLabel
                  value="ADMIN"
                  control={<Radio />}
                  label="Админ"
                />
              </RadioGroup>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
              >
                {isLogin ? (
                  <Typography>
                    Ещё нет аккаунта?{' '}
                    <Link
                      to={routes.registration}
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(routes.registration, {
                          state: location.state,
                          replace: true,
                        })
                      }}
                    >
                      Зарегистрируйтесь
                    </Link>
                  </Typography>
                ) : (
                  <Typography>
                    Уже зарегистрированы?{' '}
                    <Link
                      to={routes.login}
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(routes.login, {
                          state: location.state,
                          replace: true,
                        })
                      }}
                    >
                      Войдите
                    </Link>
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ alignSelf: 'end' }}
                >
                  {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Box>
  )
}
