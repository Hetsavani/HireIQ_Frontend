import React from 'react';
import './QuizResult.css';

const quizData = {
  correct: 4,
  incorrect: 1,
  score: '85%',
  questions: [
    {
      id: 1,
      type: 'correct',
      question: 'React is mainly used for building ___.',
      options: ['Database', 'Connectivity', 'User interface', 'Design Platform'],
      selected: 'User interface',
      correctAnswer: 'User interface',
      timeTaken: '00:00:05',
      points: '3/3',
      typeInput: 'radio'
    },
    {
      id: 2,
      type: 'incorrect',
      question: 'React is mainly used for building ___.',
      options: ['Database', 'Connectivity', 'User interface', 'Design Platform'],
      selected: 'Database',
      correctAnswer: 'User interface',
      timeTaken: '00:00:08',
      points: '0/3',
      typeInput: 'radio'
    },
    {
      id: 3,
      type: 'skipped',
      question: 'React is mainly used for building ___.',
      options: ['Database', 'Connectivity', 'User interface', 'Design Platform'],
      selected: null,
      correctAnswer: 'User interface',
      timeTaken: '00:00:08',
      points: '0/3',
      typeInput: 'checkbox'
    },
    {
      id: 4,
      type: 'partial',
      question: 'React is mainly used for building ___.',
      options: ['Database', 'Connectivity', 'User interface', 'Design Platform'],
      selected: ['Database', 'User interface'],
      correctAnswer: ['User interface'],
      timeTaken: '00:00:05',
      points: '3/3',
      typeInput: 'checkbox'
    }
  ]
};

const QuizResult = () => {
  const renderStatusLabel = (type) => {
    switch (type) {
      case 'correct':
        return <span className="quiz-status-label text-success">Correct Answer</span>;
      case 'incorrect':
        return <span className="quiz-status-label text-danger">Incorrect Answer</span>;
      case 'skipped':
        return <span className="quiz-status-label text-info">Skipped</span>;
      case 'partial':
        return <span className="quiz-status-label text-warning">Half Answer</span>;
      default:
        return null;
    }
  };

  const getBorderClass = (type) => `quiz-card ${type}`;

  const isChecked = (type, option, selected) => {
    if (!selected) return false;
    return Array.isArray(selected) ? selected.includes(option) : selected === option;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header-container">
        <h1 className="quiz-header">Quiz - Sample results</h1>
        <p className="quiz-description">
          These sample results represent what you'll see for each candidate when they submit their test.
        </p>
      </div>

      <div className="quiz-summary">
        <div className="quiz-summary-card">
          <h3>{quizData.correct}</h3>
          <span className="quiz-summary-label text-success">Correct Answers</span>
        </div>
        <div className="quiz-summary-card">
          <h3>{quizData.incorrect}</h3>
          <span className="quiz-summary-label text-danger">Incorrect Answers</span>
        </div>
        <div className="quiz-summary-card">
          <h3 className="text-success">{quizData.score}</h3>
          <span className="quiz-summary-label">Total score</span>
        </div>
      </div>

      {quizData.questions.map((q) => (
        <div key={q.id} className={getBorderClass(q.type)}>
          <div className="quiz-card-header">
            {renderStatusLabel(q.type)}
            <div className="quiz-meta">
              <span className="quiz-time">
                Time Taken: <b>{q.timeTaken}</b>
              </span>
              <span className="quiz-points">{q.points} Points</span>
            </div>
          </div>

          <div className="quiz-body">
            <span className="quiz-question-id">Question {q.id}</span>
            <h3 className="quiz-question">{q.question}</h3>

            <div className="quiz-options">
              {q.options.map((opt, index) => (
                <label className="quiz-option-label" key={index}>
                  <input
                    type={q.typeInput}
                    disabled
                    checked={isChecked(q.type, opt, q.selected)}
                    readOnly
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizResult;
