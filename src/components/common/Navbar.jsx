import React, { useEffect, useState } from 'react';
import './Navbar.css';



const Navbar = () => {

    const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);


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


          <div className="user-section_CN">
            <div className="user-profile_CN">
              {/* <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="user-avatar_CN"
              /> */}
                <i className="fas fa-user-circle user-avatar-icon_CN"></i> {/* replaced image with icon */}

              <div className="user-info_CN">
                <span className="user-name_CN">{name || 'Guest'}</span>
                {/* <span className="user-role_CN">{user?.role || 'User'}</span> */}
              </div>

              {/* <i className="fas fa-chevron-down dropdown-icon_CN"></i> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;