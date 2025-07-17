
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateLayout from '../layouts/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';

function CandidateRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default CandidateRoute;
