
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateLayout from '../layouts/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';
import QuizById from '../pages/candidate/QuizById';
import QuizQuestion from '../pages/candidate/QuizQuestion';
import ExploreQuiz from '../pages/candidate/ExploreQuiz/ExploreQuiz';
import QuizPage from '../pages/candidate/StartQuiz/QuizPage';
import CompletedQuizzes from '../pages/candidate/CompletedQuizzes';
import LoginNew from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';



function CandidateRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="ExploreQuiz" element={<ExploreQuiz />}/>
          <Route path="ExploreQuiz/QuizById" element={<QuizById />} />
          <Route path="quizQuestion" element={<QuizQuestion />} />

          <Route path="quizpage" element={<QuizPage />} />
          <Route path="completedQuizzes" element={<CompletedQuizzes />} />

        </Route> 
        <Route path="/login" element={<LoginNew />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default CandidateRoute;
