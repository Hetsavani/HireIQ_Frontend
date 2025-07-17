import React from 'react';
import './CandidateDashboard.css';

const CandidateDashboard = () => {
  return (
    <main className='main-content'>
      <h1>Your Quiz Adventure</h1>
      <h2>Starts Here: Play, Share, Earn!</h2>
      <p>Build engaging quizzes, challenge others, and earn rewards for your knowledge</p>
      <div className="buttons">
        <button className="create-btn">Create Quiz</button>
        <button className="join-btn">Join Contest</button>
      </div>
      <div className="categories">
        <h3>Quiz Categories</h3>
        {/* Add category cards or list here */}
      </div>
    </main>
  );
};

export default CandidateDashboard;