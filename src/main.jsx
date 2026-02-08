import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import './index.css'
import App from './App.jsx'
import ExtendedFamily from './ExtendedFamily.jsx'
import { AuthProvider } from './AuthContext.jsx'
import PasswordGate from './PasswordGate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthProvider>
        <PasswordGate>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/extended-family" element={<ExtendedFamily />} />
            </Routes>
          </HashRouter>
        </PasswordGate>
      </AuthProvider>
    </HeroUIProvider>
  </StrictMode>,
)
