
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateLayout from '../layouts/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';
import QuizById from '../pages/candidate/QuizById';
import QuizQuestion from '../pages/candidate/QuizQuestion';



import ExploreQuiz from '../pages/candidate/ExploreQuiz/ExploreQuiz';
import LoginNew from '../pages/auth/Login';


function CandidateRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="quizById" element={<QuizById />} />
          <Route path="quizQuestion" element={<QuizQuestion />} />
          

        </Route>
        <Route  path='login' element={<LoginNew/>}/>
      </Routes>
    </Router>
  );
}

export default CandidateRoute;
