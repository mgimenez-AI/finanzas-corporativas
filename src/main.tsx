import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import { notifyOfflineReady, promptForPwaUpdate, type UpdateServiceWorker } from './lib/pwa'
import './styles.css'

const updateSW: UpdateServiceWorker = registerSW({
  onNeedRefresh() { promptForPwaUpdate(updateSW) },
  onOfflineReady() { notifyOfflineReady() },
})

createRoot(document.getElementById('root')!).render(<StrictMode><HashRouter><App /></HashRouter></StrictMode>)
