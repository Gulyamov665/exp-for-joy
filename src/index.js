import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import './18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50vh',
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
)
