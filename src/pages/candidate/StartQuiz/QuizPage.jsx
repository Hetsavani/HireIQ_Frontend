import React, { useState, useRef, useEffect } from 'react';
import './QuizPage.css';

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"]
  }
  // Add 9 more...
];

const QuizPage = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const quizRef = useRef(null);

  // ✅ Trigger fullscreen after content is rendered
  useEffect(() => {
    if (started) {
      setTimeout(() => {
        const elem = quizRef.current;
        if (elem && elem.requestFullscreen) elem.requestFullscreen();
        else if (elem && elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem && elem.msRequestFullscreen) elem.msRequestFullscreen();
      }, 100); // wait for content to appear
    }
  }, [started]);

  const handleOptionSelect = (option) => {
    const updated = [...userAnswers];
    updated[currentQ] = option;
    setUserAnswers(updated);
  };

  const getStatus = (index) => {
    if (userAnswers[index]) return 'answered';
    if (index < currentQ) return 'skipped';
    return 'pending';
  };

  return (
    <div ref={quizRef} className="quiz-wrapper d-flex vh-100">
      {!started ? (
        <div className="start-screen bg-dark text-white d-flex flex-column justify-content-center align-items-center w-100">
          <h2>Ready to Start Quiz?</h2>
          <button className="btn btn-primary mt-3" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          {/* Sidebar */}
          {/* <div className='d-flex flex'> */}
          <div className="sidebar bg-dark text-white p-3" style={{ width: '200px' }}>
            <h5>Questions</h5>
            {questions.map((_, index) => (
              <div
                key={index}
                className={`question-box mb-2 ${getStatus(index)} ${index === currentQ ? 'active' : ''}`}
                onClick={() => setCurrentQ(index)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor:
                    getStatus(index) === 'answered' ? '#6366F1' :
                    getStatus(index) === 'skipped' ? '#EAB308' :
                    '#1E293B',
                  color: 'white',
                  borderRadius: '5px'
                }}
              >
                Q{index + 1}
              </div>
            ))}
          </div>

          {/* Main Quiz Content */}
          <div className="quiz-content p-4 flex-grow-1 text-white" style={{ backgroundColor: '#0F172A', marginLeft : '200px'}}>
            <h4>Question {currentQ + 1}</h4>
            <p className="fs-5">{questions[currentQ].question}</p>
            <div className="options mt-3">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  className={`btn me-2 mb-2 ${userAnswers[currentQ] === opt ? 'btn-primary' : 'btn-outline-light'}`}
                  onClick={() => handleOptionSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => currentQ > 0 && setCurrentQ(currentQ - 1)}
              >
                Previous
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => currentQ < questions.length - 1 && setCurrentQ(currentQ + 1)}
              >
                Next
              </button>
            </div>
          </div>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default QuizPage;
