import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Financas from './pages/Financas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="financas" element={<Financas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
