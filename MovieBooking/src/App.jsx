import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { renderRoutes } from './routes'


export default function App() {
  return (
     <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
     </BrowserRouter>
  )
}

