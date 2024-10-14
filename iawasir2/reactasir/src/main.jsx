import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './Web.jsx'
import {Prueba,Franco} from './Prueba.jsx'
import { Cabecera } from './Cabecera.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prueba />
    <Web />
    <Franco />
    <Cabecera />
  </StrictMode>,
)
