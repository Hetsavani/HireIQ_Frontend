import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../../../assets/img/admin.png';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate('/admin/logout');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar_container_AN">
      <div className="navbar_content_AN">
        {/* Brand Section */}
        <div className="brand_section_AN">
          <Link to="/admin/dashboard" className="brand_link_AN">
            <div className="brand_icon_AN">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span className="brand_text_AN">Quiz Admin Portal</span>
          </Link>
        </div>

        {/* Navigation Actions */}
        <div className="nav_actions_AN">
         
          {/* Profile Dropdown */}
          <div className="profile_dropdown_AN">
            <button
              className="profile_button_AN"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              <div className="profile_avatar_AN">
                <img
                  src={profilePic}
                  alt="Admin"
                  className="avatar_image_AN"
                />
                <div className="avatar_status_AN"></div>
              </div>
              <div className="profile_info_AN">
                <span className="profile_name_AN">Admin User</span>
                <span className="profile_role_AN">Administrator</span>
              </div>
              <i className={`bi bi-chevron-down dropdown_arrow_AN ${isDropdownOpen ? 'rotated_AN' : ''}`}></i>
            </button>

            {isDropdownOpen && (
              <div className="dropdown_menu_AN">
                <div className="dropdown_header_AN">
                  <div className="header_avatar_AN">
                    <img src={profilePic} alt="Admin" />
                  </div>
                  <div className="header_info_AN">
                    <h4>Admin User</h4>
                    <p>admin@quizapp.com</p>
                  </div>
                </div>
                
                <div className="dropdown_divider_AN"></div>
                
                <ul className="dropdown_list_AN">
                  <li>
                    <Link to="/admin/profile" className="dropdown_item_AN" onClick={() => setIsDropdownOpen(false)}>
                      <i className="bi bi-person-circle"></i>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/settings" className="dropdown_item_AN" onClick={() => setIsDropdownOpen(false)}>
                      <i className="bi bi-gear"></i>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/help" className="dropdown_item_AN" onClick={() => setIsDropdownOpen(false)}>
                      <i className="bi bi-question-circle"></i>
                      <span>Help & Support</span>
                    </Link>
                  </li>
                </ul>
                
                <div className="dropdown_divider_AN"></div>
                
                <button className="dropdown_item_AN logout_item_AN" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile */}
      {isDropdownOpen && <div className="dropdown_backdrop_AN" onClick={() => setIsDropdownOpen(false)}></div>}
    </nav>
  );
};

export default AdminNavbar;