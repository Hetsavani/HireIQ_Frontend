// import React from 'react';
// import './CreateQuiz.css';

// const Questions = () => {
//   return (
//     <div className="quiz-form">
//       <h2 className="form-title">Questions</h2>
//       <div>
//         <div>Question 1</div>
//         <div>Question 2</div>
//         <button className="btn btn-primary" style={{ marginTop: '20px' }}>Add Question</button>
//       </div>
//       <div className="form-actions">
//         <button className="btn btn-secondary">New Quiz</button>
//         <button className="btn btn-secondary">Preview</button>
//         <button className="btn btn-danger">Delete Quiz</button>
//         <button className="btn btn-secondary">Save Draft</button>
//         <button className="btn btn-primary">Publish Quiz</button>
//       </div>
//     </div>
//   );
// };

// export default Questions;

import React, { useState } from 'react';
import './CreateQuiz.css';


const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    { id: 1, text: 'Question 1' },
    { id: 2, text: 'Question 2' },
  ];

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="p-4 rounded shadow" style={{ backgroundColor: '#0F172A', color: '#F8FAFC' }}>
      <h2 className="fw-bold mb-4" style={{ color: '#6366F1' }}>Questions</h2>

      {questions.map((question) => (
        <div key={question.id} className="mb-3 border rounded">
          <div
            className="d-flex justify-content-between align-items-center p-3"
            style={{
              backgroundColor: '#1E293B',
              cursor: 'pointer',
              color: '#F8FAFC',
            }}
            onClick={() => handleQuestionClick(question.id)}
          >
            <span>{question.text}</span>
            <i className="bi bi-chevron-down text-light"></i>
          </div>

          {openQuestion === question.id && (
            <div className="p-3" style={{ backgroundColor: '#020817' }}>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Question Text</label>
                <textarea
                  className="form-control"
                  style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                  defaultValue={question.text}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Options</label>
                {[1, 2, 3, 4].map((num) => (
                  <div className="input-group mb-2" key={num}>
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name={`options-${question.id}`}
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                      defaultValue={`Option ${num}`}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Explanation (shown after answering)</label>
                <textarea
                  className="form-control"
                  style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                  defaultValue="Explanation for the correct answer"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="btn mb-4" style={{ backgroundColor: '#6366F1', color: '#fff' }}>
        Add Question
      </button>

      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-secondary">New Quiz</button>
        <button className="btn btn-secondary">Preview</button>
        <button className="btn btn-danger">Delete Quiz</button>
        <button className="btn btn-outline-light">Save Draft</button>
        <button className="btn" style={{ backgroundColor: '#6366F1', color: '#fff' }}>
          Publish Quiz
        </button>
      </div>
    </div>
  );
};


export default Questions;