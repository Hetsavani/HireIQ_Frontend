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
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/create-quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Create Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/view-submissions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            View Submissions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/view-report" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            View Report
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/ai-quiz-generator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            AI Quiz Generator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Settings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/logout" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
