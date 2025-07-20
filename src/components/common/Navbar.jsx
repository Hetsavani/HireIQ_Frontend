import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar_CN">
      <div className="navbar-content_CN">
        <div className="search-section_CN">
          <div className="search-bar_CN">
            <i className="fas fa-search search-icon_CN"></i>
            <input 
              type="text" 
              placeholder="Search quizzes, categories, creators..." 
              className="search-input_CN"
            />
          </div>
        </div>
        
        <div className="nav-actions_CN">
          {/* <div className="action-icons_CN">
            <button className="icon-button_CN">
              <i className="fas fa-comment"></i>
              <span className="notification-badge_CN">3</span>
            </button>
            <button className="icon-button_CN">
              <i className="fas fa-bell"></i>
              <span className="notification-badge_CN">5</span>
            </button>
          </div> */}
          
          {/* <div className="balance-section_CN">
            <div className="balance-container_CN">
              <i className="fas fa-wallet balance-icon_CN"></i>
              <span className="balance-amount_CN">$124.50</span>
            </div>
          </div> */}
          
          <div className="user-section_CN">
            <div className="user-profile_CN">
              <img 
                src="https://via.placeholder.com/40" 
                alt="User" 
                className="user-avatar_CN" 
              />
              <div className="user-info_CN">
                <span className="user-name_CN">John Doe</span>
                <span className="user-role_CN">Candidate</span>
              </div>
              <i className="fas fa-chevron-down dropdown-icon_CN"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;