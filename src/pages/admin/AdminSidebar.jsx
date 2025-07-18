import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <nav className="admin-sidebar">
      <div className="sidebar-header">
        <h4 className="text-white">Admin Panel</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
        </li>
     
        <li className="nav-item">
          <Link to="/admin/create-quiz" className="nav-link active">Create Quiz</Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/view-submissions" className="nav-link">View Submissions</Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/view-report" className="nav-link">View Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/ai-quiz-generator" className="nav-link">AI Quiz Generator</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/settings" className="nav-link">Settings</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/logout" className="nav-link">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;