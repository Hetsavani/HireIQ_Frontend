import { useState } from 'react'
import CandidateRoute from './routes/CandidateRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {

  return (
    <>
      <CandidateRoute></CandidateRoute>
      <AdminRoutes></AdminRoutes>
    </>
  )
}

export default App
