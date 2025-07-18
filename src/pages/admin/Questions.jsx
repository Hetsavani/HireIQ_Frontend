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
    <div className="quiz-form">
      <h2 className="form-title">Questions</h2>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <div
              className="question-title"
              onClick={() => handleQuestionClick(question.id)}
            >
              {question.text} <span className="dropdown-icon">▼</span>
            </div>
            {openQuestion === question.id && (
              <div className="question-details">
                <div className="form-group">
                  <label className="form-label">Question Text</label>
                  <textarea
                    className="form-control"
                    defaultValue={question.text}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Options</label>
                  <div>
                    <label>
                      <input type="radio" name={`options-${question.id}`} /> Option 1
                      <input
                        type="text"
                        className="form-control option-input"
                        defaultValue="Option 1"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name={`options-${question.id}`} /> Option 2
                      <input
                        type="text"
                        className="form-control option-input"
                        defaultValue="Option 2"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name={`options-${question.id}`} /> Option 3
                      <input
                        type="text"
                        className="form-control option-input"
                        defaultValue="Option 3"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name={`options-${question.id}`} /> Option 4
                      <input
                        type="text"
                        className="form-control option-input"
                        defaultValue="Option 4"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Explanation (shown after answering)</label>
                  <textarea
                    className="form-control"
                    defaultValue="Explanation for the correct answer"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <button className="btn btn-primary" style={{ marginTop: '20px' }}>Add Question</button>
      </div>
      <div className="form-actions">
        <button className="btn btn-secondary">New Quiz</button>
        <button className="btn btn-secondary">Preview</button>
        <button className="btn btn-danger">Delete Quiz</button>
        <button className="btn btn-secondary">Save Draft</button>
        <button className="btn btn-primary">Publish Quiz</button>
      </div>
    </div>
  );
};

export default Questions;