import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><div className='logo'>QuizHub</div></li>
        <li className="active"><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-compass"></i> Explore Quizzes</li>
        <li><i className="fas fa-trophy"></i> Quiz Tournament</li>
        <li><i className="fas fa-list-ol"></i> Leaderboard</li>
        <li><i className="fas fa-list"></i> Old Quiz Results</li>
        <li><i className="fas fa-lightbulb"></i> Quiz Creator Tips</li>
        <li><i className="fas fa-comments"></i> Quiz Discussions</li>
        <li><i className="fas fa-sign-out-alt"></i> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
