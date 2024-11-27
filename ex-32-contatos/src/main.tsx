// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// icones bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// importando react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
