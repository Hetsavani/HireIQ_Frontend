import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar_CS">
      <div className="logo_CS">
        <div className="logo-icon_CS">
          <i className="fas fa-book-open" />
        </div>
        <span className="logo-text_CS">HireIQ</span>
      </div>
      <nav className="nav_CS">
        <ul className="nav-list_CS">
          <li className="nav-item_CS">
            <NavLink
              to="/candidate"
              end
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-home nav-icon_CS" />
              <span className="nav-text_CS">Home</span>
            </NavLink>
          </li>
          <li className="nav-item_CS">
            <NavLink
              to="/candidate/ExploreQuiz"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-compass nav-icon_CS" />
              <span className="nav-text_CS">Explore Quizzes</span>
            </NavLink>
          </li>
          {/* <li className="nav-item_CS">
            <NavLink
              to="/leaderboard"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-list-ol nav-icon_CS" />
              <span className="nav-text_CS">Leaderboard</span>
            </NavLink>
          </li> */}
          <li className="nav-item_CS">
            <NavLink
              to="/candidate/completedQuizzes"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-list nav-icon_CS" />
              <span className="nav-text_CS">Old Quiz Results</span>
            </NavLink>
          </li>
          <li className="nav-item_CS">
            <NavLink
              to="/discussions"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-comments nav-icon_CS" />
              <span className="nav-text_CS">Quiz Discussions</span>
            </NavLink>
          </li>
          <li className="nav-item_CS">
            <NavLink
              to="botConversation"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-robot nav-icon_CS" />
              <span className="nav-text_CS">Bot Conversation</span>
            </NavLink>
          </li>
          <li className="nav-item_CS">
            <NavLink
              to="/logout"
              className={({ isActive }) => `nav-link_CS ${isActive ? 'active_CS' : ''}`}
            >
              <i className="fas fa-sign-out-alt nav-icon_CS" />
              <span className="nav-text_CS">Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;