import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <nav className="admin_sidebar_AS">
      <div className="sidebar_header_AS">
        <div className="header_content_AS">
          {/* <div className="logo_icon_AS">
            <i className="bi bi-mortarboard-fill"></i>
          </div> */}
          <h4 className="header_title_AS">Quiz Admin</h4>
        </div>
        <div className="header_divider_AS"></div>
      </div>
      
      <div className="nav_container_AS">
        <ul className="nav_menu_AS">
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/dashboard" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-speedometer2 nav_icon_AS"></i>
                <span className="nav_text_AS">Dashboard</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/create-quiz" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-plus-square nav_icon_AS"></i>
                <span className="nav_text_AS">Create Quiz</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/view-submissions" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-clipboard-check nav_icon_AS"></i>
                <span className="nav_text_AS">View Submissions</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/view-report" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-bar-chart-line nav_icon_AS"></i>
                <span className="nav_text_AS">View Report</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/ai-quiz-generator" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-cpu nav_icon_AS"></i>
                <span className="nav_text_AS">AI Quiz Generator</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/quiz-result" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-trophy nav_icon_AS"></i>
                <span className="nav_text_AS">Quiz Result</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
          
          <li className="nav_item_AS">
            <NavLink 
              to="/admin/settings" 
              className={({ isActive }) => `nav_link_AS ${isActive ? 'active_AS' : ''}`}
            >
              <div className="link_content_AS">
                <i className="bi bi-gear nav_icon_AS"></i>
                <span className="nav_text_AS">Settings</span>
              </div>
              <div className="active_indicator_AS"></div>
            </NavLink>
          </li>
        </ul>
        
        <div className="sidebar_footer_AS">
          <NavLink 
            to="/admin/logout" 
            className={({ isActive }) => `nav_link_AS logout_link_AS ${isActive ? 'active_AS' : ''}`}
          >
            <div className="link_content_AS">
              <i className="bi bi-box-arrow-right nav_icon_AS"></i>
              <span className="nav_text_AS">Logout</span>
            </div>
            <div className="active_indicator_AS"></div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebar;