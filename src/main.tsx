import App from "./App";
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)