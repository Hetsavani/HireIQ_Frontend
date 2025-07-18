
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateLayout from '../layouts/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';

import ExploreQuiz from '../pages/candidate/ExploreQuiz/ExploreQuiz';


function CandidateRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="explore" element={<ExploreQuiz/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default CandidateRoute;
