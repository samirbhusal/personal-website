import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ─── Stable viewport height fix ───────────────────────────────────────────────
// On mobile browsers, 100vh changes when the address bar hides/shows, causing
// layout reflows that look like page reloads. We capture the true height once
// and only update it on real orientation changes, not on every resize.
function setVh() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
setVh()
// Only update on orientation change (physical device rotation), not on scroll-triggered resize
window.addEventListener('orientationchange', () => {
  // Small delay to let the browser settle after orientation change
  setTimeout(setVh, 100)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
