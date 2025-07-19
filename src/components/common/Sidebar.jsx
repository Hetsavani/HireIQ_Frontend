import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-book-open" />
        <span>  HireIQ</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/candidate"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-home" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/candidate/ExploreQuiz"

              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-compass" /> Explore Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-list-ol" /> Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/candidate/completedQuizzes"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-list" /> Old Quiz Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discussions"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-comments" /> Quiz Discussions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fas fa-sign-out-alt" /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
