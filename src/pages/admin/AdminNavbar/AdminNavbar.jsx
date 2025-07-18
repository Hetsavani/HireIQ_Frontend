import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../../../assets/img/admin.png'; // replace with actual profile picture path
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session/token here
    navigate('/admin/logout');
  };

  return (
    <nav className="navbar position-sticky navbar-expand-lg px-4 top-0" style={{ backgroundColor: '#2c3e50' }}>
      <Link to="/admin/dashboard" className="navbar-brand text-white fw-bold">
        Quiz Admin
      </Link>

      <div className="ms-auto d-flex align-items-center">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle d-flex align-items-center border-0 bg-transparent text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={profilePic}
              alt="Admin"
              className="rounded-circle"
              width="35"
              height="35"
            />
            <span className="ms-2 d-none d-md-inline">Admin</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#34495e' }}>
            <li>
              <Link
                to="/admin/profile"
                className="dropdown-item text-white"
                style={{ backgroundColor: '#34495e' }}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                className="dropdown-item text-white"
                style={{ backgroundColor: '#34495e' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
