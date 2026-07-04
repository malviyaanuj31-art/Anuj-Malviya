import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const App = lazy(() => import('./App.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#080808] text-slate-200">Loading portfolio…</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
