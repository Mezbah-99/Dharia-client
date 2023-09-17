import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToggleContextProvider } from './contexts/ToggleContext'
import { ProjectContextProvider } from './contexts/ProjectsContext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'


AuthContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleContextProvider>
        <ProjectContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ProjectContextProvider>
      </ToggleContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
