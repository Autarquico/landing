import './i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import { TerminosPage } from './pages/legal/TerminosPage.tsx'
import { PrivacidadPage } from './pages/legal/PrivacidadPage.tsx'
import { GdprPage } from './pages/legal/GdprPage.tsx'
import { DeltaPage } from './pages/DeltaPage.tsx'
import { SigmaPage } from './pages/SigmaPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal/terminos" element={<TerminosPage />} />
        <Route path="/legal/privacidad" element={<PrivacidadPage />} />
        <Route path="/legal/gdpr" element={<GdprPage />} />
        <Route path="/delta" element={<DeltaPage />} />
        <Route path="/sigma" element={<SigmaPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
