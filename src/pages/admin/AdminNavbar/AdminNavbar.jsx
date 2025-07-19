import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../../../assets/img/admin.png';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/logout');
  };

  return (
    <nav className="navbar position-sticky navbar-expand-lg px-4 top-0" style={{ backgroundColor: '#020817' }}>
      <Link to="/admin/dashboard" className="navbar-brand fw-bold" style={{ color: '#F8FAFC' }}>
        Quiz Admin
      </Link>

      <div className="ms-auto d-flex align-items-center">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle d-flex align-items-center border-0 bg-transparent"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: '#F8FAFC' }}
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

          <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#1E293B' }}>
            <li>
              <Link
                to="/admin/profile"
                className="dropdown-item"
                style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                className="dropdown-item"
                style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
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
