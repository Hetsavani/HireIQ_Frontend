
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search quizzes, categories, creators..." />
      </div>
      <div className="nav-icons">
        <i className="fas fa-comment"></i>
        <i className="fas fa-bell"></i>
        <span className="balance">$124.50</span>
        <img src="https://via.placeholder.com/40" alt="User" className="user-img" />
      </div>
    </nav>
  );
};

export default Navbar;