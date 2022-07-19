import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'

import GlobalStyles from './styles/global'

import theme from './styles/theme'

// import {MoviePreview} from './pages/MoviePreview'

// import {SignIn} from './pages/SignIn'

// import {SignUp} from './pages/SignUp'

// import {Profile} from './pages/Profile'

// import {CreateMovie} from './pages/CreateMovie'

// import {Home} from './pages/Home'
// these lines are not needed because routes have been sorted

import { AuthProvider } from './hooks/auth'

import {Routes} from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
