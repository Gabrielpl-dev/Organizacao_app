import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './App.jsx'
import HomeLayout from './components/HomeLayout.jsx'
import Cabelo from './pages/Cabelo.jsx'
import Rosto from './pages/Rosto.jsx'
import Roupa from './pages/Roupa.jsx'
import Financas from './pages/Financas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomeLayout />}>
            <Route path="cabelo" element={<Cabelo />} />
            <Route path="rosto" element={<Rosto />} />
            <Route path="roupa" element={<Roupa />} />
          </Route>
          <Route path="financas" element={<Financas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
