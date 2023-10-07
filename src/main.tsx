import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from '@/App.tsx'
import 'swiper/css'
import 'font-awesome/css/font-awesome.min.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
