import React, { useEffect, useState } from 'react';
import './CompletedQuizzes.css';
import axios from 'axios';

const CompletedQuizzes = () => {

  const [completedQuizzes,setcompletedQuizzes] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const response = await axios.get(`http://localhost:3000/api/submissions/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        setcompletedQuizzes(response.data);

        console.log(response.data);

      } catch (err) {
        console.error('Failed to fetch submissions:', err);
        // setError('Failed to load submissions.');
      }
    };


    fetchSubmissions();
  }, []);
  

  return (
    <div className="cq-container" style={{ backgroundColor: '#020817' }}>
      <div className="cq-header">
        <h2 className="cq-title">Completed Quizzes</h2>
        <p className="cq-subtitle">Review your quiz performance and results</p>
      </div>
      
      <div className="cq-grid">
        {completedQuizzes.map((quiz) => (
          <div key={quiz.quizId.quizId} className="cq-card">
            <div className="cq-card-header">
              <span className={`cq-status cq-status-${quiz.eligibility=="Eligible" ? "passed" : "failed"}`}>
                {quiz.eligibility=="Eligible" ? "Passed" : "Failed"}
              </span>
              <span className={`cq-difficulty cq-difficulty-${quiz.quizId.questions[0].difficulty}`}>
                {quiz.quizId.questions[0].difficulty}
              </span>
            </div>
            
            <div className="cq-card-body">
              <h3 className="cq-topic">{quiz.quizId.questions[0].type}</h3>
              <div className="cq-meta">
                <span className="cq-date">
                  {new Date(quiz.quizId.createdAt).toLocaleString('en-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </span>
                {/* <span className="cq-category">{quiz.category}</span> */}
              </div>
              
              <div className="cq-stats">
                <div className="cq-stat-item">
                  <span className="cq-stat-label">MCQs</span>
                  <span className="cq-stat-value">{quiz.score}/{quiz.quizId.questions.length}</span>
                </div>
                <div className="cq-stat-item">
                  <span className="cq-stat-label">Marks</span>
                  <span className="cq-stat-value">{quiz.score}/{quiz.quizId.questions.length}</span>
                </div>
                <div className="cq-stat-item">
                  <span className="cq-stat-label">Time</span>
                  <span className="cq-stat-value">{quiz.quizId.timeLimit/60}</span>
                </div>
              </div>
              
              <div className="cq-progress-container">
                <div 
                  className="cq-progress-bar" 
                  style={{ 
                    width: `${(quiz.score / quiz.quizId.questions.length) * 100}%`,
                    backgroundColor: quiz.eligibility=="Eligible" ? '#6366F1' : '#F43F5E'
                  }}
                ></div>
              </div>
            </div>
            
            <button className="cq-restart-btn">
             View Results
              <svg className="cq-btn-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedQuizzes;