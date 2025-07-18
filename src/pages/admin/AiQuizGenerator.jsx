import React, { useState } from 'react';
import './AiQuizGenerator.css';

const AiQuizGenerator = () => {
  const [formData, setFormData] = useState({
    topic: '',
    difficulty: 'medium',
    numberOfQuestions: 5,
    additionalInformation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ai-quiz-generator-container">
      <h2>AI Quiz Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quiz Topic</label>
          <input
            type="text"
            name="topic"
            placeholder="e.g., World History, Space Exploration, etc."
            value={formData.topic}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Difficulty Level</label>
          <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label>Number of Questions</label>
          <select name="numberOfQuestions" value={formData.numberOfQuestions} onChange={handleChange}>
            <option value="5">5 Questions</option>
            <option value="10">10 Questions</option>
            <option value="15">15 Questions</option>
          </select>
        </div>
        <div className="form-group">
          <label>Additional Information (Optional)</label>
          <textarea
            name="additionalInformation"
            placeholder="Any specific requirements or focus areas for the quiz"
            value={formData.additionalInformation}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Generate Quiz</button>
      </form>
    </div>
  );
};

export default AiQuizGenerator;