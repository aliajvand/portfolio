import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { applyTheme, initialTheme } from './lib/theme.js'
import App from './App.jsx'
import './styles/index.css'

// Paint the design tokens before React renders, so there is no flash.
applyTheme(initialTheme())

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
