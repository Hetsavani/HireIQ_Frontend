import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <nav className="admin-sidebar">
      <div className="sidebar-header">
        <h4 className="text-white">Admin Panel</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/admin/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/create-quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-plus-square me-2"></i> Create Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/view-submissions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-clipboard-check me-2"></i> View Submissions
          </NavLink>
        </li>
        
      {/* 
         <li className="nav-item">
          <NavLink to="/admin/leaderboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-clipboard-check me-2"></i> LeaderBoard
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink to="/admin/view-report" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-bar-chart-line me-2"></i> View Report
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/ai-quiz-generator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-cpu me-2"></i> AI Quiz Generator
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/admin/quiz-result" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-cpu me-2"></i> Quiz Result
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-gear me-2"></i> Settings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/logout" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
