import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FinanceSummary from './finance_summary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinanceSummary />
  </StrictMode>,
)
