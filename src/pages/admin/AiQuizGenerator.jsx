import React, { useState } from 'react';
import './AiQuizGenerator.css';

const AiQuizGenerator = () => {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    difficulty: 'medium',
    numberOfQuestions: 5,
    timeLimit: '',
    additionalInformation: ''
  });

  const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'editor'
  const [showQuestionList, setShowQuestionList] = useState(false);

  const [editorTab, setEditorTab] = useState('details'); // 'details' | 'questions' | 'settings'


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQuestionList(true);
    setActiveTab('generator');
  };

  const questionList = Array.from({ length: formData.numberOfQuestions }, (_, i) => ({
    questionType: 'Multiple Choice',
    questionText: `Sample Question ${i + 1} on ${formData.topic || 'General Knowledge'}?`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
    difficulty: formData.difficulty
  }));

  const [editableQuestions, setEditableQuestions] = useState(questionList);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...editableQuestions];
    updated[index][field] = value;
    setEditableQuestions(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...editableQuestions];
    updated[qIndex].options[oIndex] = value;
    setEditableQuestions(updated);
  };

  const addQuestion = () => {
    setEditableQuestions(prev => [
      ...prev,
      {
        questionText: '',
        options: ['', '', '', ''],
        answer: '',
        explanation: '',
        questionType: 'Multiple Choice',
        difficulty: formData.difficulty,
      },
    ]);
  };
  const deleteQuestion = (index) => {
    const updated = [...editableQuestions];
    updated.splice(index, 1);
    setEditableQuestions(updated);
  };
  const moveQuestion = (from, to) => {
    if (to < 0 || to >= editableQuestions.length) return;
    const updated = [...editableQuestions];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setEditableQuestions(updated);
  };
  const renderEditorTabContent = () => {
    switch (editorTab) {
      case 'details':
        return (
          <div className="quiz-box">
            <h2 className="quiz-heading">Quiz Information</h2>

            <label className="quiz-label">Quiz Title</label>
            <input className="quiz-input" value={formData.title} readOnly />

            <label className="quiz-label">Topic</label>
            <input className="quiz-input" value={formData.topic} readOnly />

            <label className="quiz-label">Difficulty Level</label>
            <input className="quiz-input" value={formData.difficulty} readOnly />

            <label className="quiz-label">Number of Questions</label>
            <input className="quiz-input" value={formData.numberOfQuestions} readOnly />

            <label className="quiz-label">Time Limit (mins)</label>
            <input className="quiz-input" value={formData.timeLimit} readOnly />

            <label className="quiz-label">Additional Information</label>
            <textarea className="quiz-textarea" value={formData.additionalInformation} readOnly />
          </div>
        );

      case 'questions':
        return (
          <div className="question-editor">
            <div className="question-header">
              <h3>Questions</h3>
              <button className="add-btn" onClick={addQuestion}>➕ Add Question</button>
            </div>
            {editableQuestions.map((q, i) => (
              <div key={i} className={`question-item ${expandedIndex === i ? 'expanded' : ''}`}>
                <div className="question-title" onClick={() => toggleExpand(i)}>
                  <strong>Question {i + 1}</strong>
                  <div className="question-actions">
                    <button onClick={(e) => { e.stopPropagation(); moveQuestion(i, i - 1); }}>⬆</button>
                    <button onClick={(e) => { e.stopPropagation(); moveQuestion(i, i + 1); }}>⬇</button>
                    <button onClick={(e) => { e.stopPropagation(); deleteQuestion(i); }}>🗑</button>
                  </div>
                </div>

                {expandedIndex === i && (
                  <div className="question-body">
                    <label>Question Text</label>
                    <textarea value={q.questionText} onChange={(e) => updateQuestion(i, 'questionText', e.target.value)} />

                    <label>Options</label>
                    {q.options.map((opt, idx) => (
                      <div key={idx} className="option-row">
                        <input
                          type="radio"
                          name={`answer-${i}`}
                          checked={q.answer === opt}
                          onChange={() => updateQuestion(i, 'answer', opt)}
                        />
                        <input
                          type="text"
                          value={opt}
                          onChange={(e) => updateOption(i, idx, e.target.value)}
                        />
                      </div>
                    ))}

                    <label>Explanation (shown after answering)</label>
                    <textarea
                      value={q.explanation || ''}
                      onChange={(e) => updateQuestion(i, 'explanation', e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'settings':
        return (
          <div className="quiz-box">
            <h2 className="quiz-heading">Settings</h2>
            <p>Display quiz configuration options here.</p>
          </div>
        );

      default:
        return <h1>Hello</h1>;
    }
  };

  return (
    <div className="quiz-container">

      {/* === Tabs === */}
      <div className="quiz-tabs">
        <button
          className={`quiz-tab ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          AI Generator
        </button>
        <button
          className={`quiz-tab ${showQuestionList ? '' : 'disabled'} ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => showQuestionList && setActiveTab('editor')}
        >
          Edit Generated Quiz
        </button>
      </div>

      {/* === Generator Form === */}
      {activeTab === 'generator' && (
        <>
          <form className="quiz-box" onSubmit={handleSubmit}>
            <h2 className="quiz-heading">AI Quiz Generator</h2>

            <label className="quiz-label">Quiz Title</label>
            <input
              className="quiz-input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Sports Trivia Challenge"
            />

            <label className="quiz-label">Quiz Topic</label>
            <input
              className="quiz-input"
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g., Space Exploration"
            />

            <div className="quiz-row">
              <div className="quiz-col">
                <label className="quiz-label">Difficulty Level</label>
                <select
                  className="quiz-select"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="quiz-col">
                <label className="quiz-label">Number of Questions</label>
                <select
                  className="quiz-select"
                  name="numberOfQuestions"
                  value={formData.numberOfQuestions}
                  onChange={handleChange}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
              </div>
            </div>

            <label className="quiz-label">Time Limit (in minutes)</label>
            <input
              className="quiz-input"
              type="number"
              name="timeLimit"
              value={formData.timeLimit}
              onChange={handleChange}
              placeholder="e.g., 30"
            />

            <label className="quiz-label">Additional Information (Optional)</label>
            <textarea
              className="quiz-textarea"
              name="additionalInformation"
              value={formData.additionalInformation}
              onChange={handleChange}
              placeholder="Any specific requirements or focus areas for the quiz"
            ></textarea>

            <button type="submit" className="quiz-generate-btn">Generate Quiz</button>
          </form>

          {showQuestionList && (
            <div className="quiz-results">
              <h3 className="quiz-success">Quiz Generated Successfully!</h3>
              <p className="quiz-message">
                Your quiz on "{formData.topic}" has been generated with {formData.numberOfQuestions} {formData.difficulty} difficulty questions.
                <br />
                Click the "Edit Generated Quiz" tab above to review and customize your quiz before publishing.
              </p>

              <h4 className="quiz-subheading">Generated Questions:</h4>
              {questionList.map((q, idx) => (
                <div key={idx} className="quiz-card">
                  <div className="quiz-card-header">
                    <strong>Q{idx + 1}: {q.questionText}</strong>
                    <span className={`badge badge-${q.difficulty}`}>{q.difficulty}</span>
                  </div>
                  <ul className="quiz-options">
                    {q.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                  <p className="quiz-answer"><strong>Answer:</strong> {q.answer}</p>
                  <p className="quiz-type"><strong>Type:</strong> {q.questionType}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* === Edit Quiz View === */}
      {activeTab === 'editor' && (
        <div className="quiz-edit-section">
          <div className="quiz-tabs inner-tabs">
            <button className={`quiz-tab ${editorTab === 'details' ? 'active' : ''}`} onClick={() => setEditorTab('details')}>Quiz Details</button>
            <button className={`quiz-tab ${editorTab === 'questions' ? 'active' : ''}`} onClick={() => setEditorTab('questions')}>Questions</button>
            </div>

          {renderEditorTabContent()}
        </div>
      )}


    </div>
  );
};


export default AiQuizGenerator;
