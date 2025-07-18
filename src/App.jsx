import { useState } from 'react'
import CandidateRoute from './routes/CandidateRoutes'
import AdminRoutes from './routes/AdminRoutes'

// import './pages/auth/Login.css'
import Login from './pages/auth/Login';
import QuizById from './pages/candidate/QuizById';

function App() {

  return (
    <>
      {/* <Login></Login> */}
      <CandidateRoute></CandidateRoute>
      <AdminRoutes></AdminRoutes>
    </>
  )
}

export default App
