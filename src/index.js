import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(process.env.PUBLIC_URL)

root.render(
  <HashRouter basename="/">
    <CssBaseline />
    <App />
  </HashRouter>
)
