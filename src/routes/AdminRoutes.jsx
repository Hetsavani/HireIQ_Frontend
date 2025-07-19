
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateQuiz from '../pages/admin/CreateQuiz';
import ViewSubmission from '../pages/admin/ViewSubmissions';
import AiQuizGenerator from '../pages/admin/AiQuizGenerator';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import QuizResult from '../pages/admin/QuizResult';


function AdminRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="view-submissions" element={<ViewSubmission />} />
        <Route path="ai-quiz-generator" element={<AiQuizGenerator />} />
        <Route path="quiz-result" element={<QuizResult />} />
      
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default AdminRoutes; 