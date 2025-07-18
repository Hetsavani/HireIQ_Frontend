
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from '../pages/admin/AdminPanel';
import CreateQuiz from '../pages/admin/CreateQuiz';
import ViewSubmission from '../pages/admin/ViewSubmissions';
import AiQuizGenerator from '../pages/admin/AiQuizGenerator';

function AdminRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="view-submissions" element={<ViewSubmission />} />
        <Route path="ai-quiz-generator" element={<AiQuizGenerator />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default AdminRoutes;