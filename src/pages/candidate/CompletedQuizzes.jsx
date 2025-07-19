import React from 'react';
import './CompletedQuizzes.css';

const CompletedQuizzes = () => {
  const completedQuizzes = [
    {
      id: 1,
      result: 'Passed',
      difficulty: 'Hard',
      topic: 'Advanced JavaScript Concepts',
      date: '2023-11-15',
      category: 'Programming',
      totalMCQ: 20,
      attemptedMCQ: 18,
      totalMarks: 100,
      gainedMarks: 85,
      time: '45 min'
    },
    {
      id: 2,
      result: 'Failed',
      difficulty: 'Medium',
      topic: 'React Hooks Mastery',
      date: '2023-11-10',
      category: 'Web Development',
      totalMCQ: 15,
      attemptedMCQ: 12,
      totalMarks: 75,
      gainedMarks: 45,
      time: '30 min'
    },
    {
      id: 3,
      result: 'Passed',
      difficulty: 'Easy',
      topic: 'CSS Fundamentals',
      date: '2023-11-05',
      category: 'Web Design',
      totalMCQ: 10,
      attemptedMCQ: 10,
      totalMarks: 50,
      gainedMarks: 48,
      time: '20 min'
    }
  ];

  return (
    <div className="cq-container" style={{ backgroundColor: '#020817' }}>
      <div className="cq-header">
        <h2 className="cq-title">Completed Quizzes</h2>
        <p className="cq-subtitle">Review your quiz performance and results</p>
      </div>
      
      <div className="cq-grid">
        {completedQuizzes.map((quiz) => (
          <div key={quiz.id} className="cq-card">
            <div className="cq-card-header">
              <span className={`cq-status cq-status-${quiz.result.toLowerCase()}`}>
                {quiz.result}
              </span>
              <span className={`cq-difficulty cq-difficulty-${quiz.difficulty.toLowerCase()}`}>
                {quiz.difficulty}
              </span>
            </div>
            
            <div className="cq-card-body">
              <h3 className="cq-topic">{quiz.topic}</h3>
              <div className="cq-meta">
                <span className="cq-date">{quiz.date}</span>
                <span className="cq-category">{quiz.category}</span>
              </div>
              
              <div className="cq-stats">
                <div className="cq-stat-item">
                  <span className="cq-stat-label">MCQs</span>
                  <span className="cq-stat-value">{quiz.attemptedMCQ}/{quiz.totalMCQ}</span>
                </div>
                <div className="cq-stat-item">
                  <span className="cq-stat-label">Marks</span>
                  <span className="cq-stat-value">{quiz.gainedMarks}/{quiz.totalMarks}</span>
                </div>
                <div className="cq-stat-item">
                  <span className="cq-stat-label">Time</span>
                  <span className="cq-stat-value">{quiz.time}</span>
                </div>
              </div>
              
              <div className="cq-progress-container">
                <div 
                  className="cq-progress-bar" 
                  style={{ 
                    width: `${(quiz.gainedMarks / quiz.totalMarks) * 100}%`,
                    backgroundColor: quiz.result === 'Passed' ? '#6366F1' : '#F43F5E'
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