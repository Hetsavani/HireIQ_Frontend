import { useState } from 'react'
import CandidateRoute from './routes/CandidateRoutes'
import AdminRoutes from './routes/AdminRoutes'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CandidateLayout from './layouts/CandidateLayout';
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import ExploreQuiz from './pages/candidate/ExploreQuiz/ExploreQuiz';
import QuizById from './pages/candidate/QuizById';
import QuizPage from './pages/candidate/StartQuiz/QuizPage';
import CompletedQuizzes from './pages/candidate/CompletedQuizzes';
import ForgotPassword from './pages/auth/ForgotPassword';
import LoginNew from './pages/auth/Login';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import CreateQuiz from './pages/admin/CreateQuiz';
import ViewSubmission from './pages/admin/ViewSubmissions';
import AiQuizGenerator from './pages/admin/AiQuizGenerator';
import QuizResult from './pages/admin/QuizResult';
import BotConversation from './pages/candidate/BotConversation';
import Agent from './pages/candidate/Agent';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="ExploreQuiz" element={<ExploreQuiz />}/>
          <Route path="ExploreQuiz/QuizById" element={<QuizById />} />
          <Route path="botConversation" element={<BotConversation />} />
          <Route path="vapi" element={<Agent />} />
          {/* <Route path="quizQuestion" element={<QuizQuestion />} /> */}
          
          <Route path="quizpage" element={<QuizPage />} />
          <Route path="completedQuizzes" element={<CompletedQuizzes />} />
        </Route> 

        <Route path="/login" element={<LoginNew />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="view-submissions" element={<ViewSubmission />} />
          <Route path="ai-quiz-generator" element={<AiQuizGenerator />} />
          <Route path="quiz-result" element={<QuizResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
