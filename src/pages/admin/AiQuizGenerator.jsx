import React, { useState } from "react";
import "./AiQuizGenerator.css";
import axios from "axios";

const AiQuizGenerator = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image:"",
    category: "",
    difficulty: "medium",
    numberOfQuestions: 5,
    timeLimit: "",
    requiredPercentage: 0,

  });

  const [activeTab, setActiveTab] = useState("generator"); // 'generator' | 'editor'
  const [showQuestionList, setShowQuestionList] = useState(false);

  const [editorTab, setEditorTab] = useState("details"); // 'details' | 'questions' | 'settings'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      topic:formData.category,
      description: formData.description || "Auto-generated quiz",
      image: formData.image,
      category: formData.category,
      difficulty: formData.difficulty,
      numberOfQuestions: Number(formData.numberOfQuestions),
      timeLimit: Number(formData.timeLimit) * 60, 
      requiredPercentage: Number(formData.requiredPercentage),
    };

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/quiz/create",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Quiz Created:", response.data);

      const response2 = await axios.get(
        "http://localhost:3000/api/quiz/join/"+response.data.quizId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response2.data);
      console.log(response2.data.quiz.questions);

      setquestionList(response2.data.quiz.questions);
      setEditableQuestions(response2.data.quiz.questions);

      // Optional: Store the response or update state
      setShowQuestionList(true);
      setActiveTab("generator");
    } catch (error) {
      console.error(
        "❌ Error Creating Quiz:",
        error.response?.data || error.message
      );
      alert("Failed to create quiz. Check console for details.");
    }

    setShowQuestionList(true);
    setActiveTab("generator");
  };

  const [questionList, setquestionList] = useState(Array.from(
    { length: formData.numberOfQuestions },
    (_, i) => ({
      questionType: "Multiple Choice",
      questionText: `Sample Question ${i + 1} on ${
        formData.topic || "General Knowledge"
      }?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
      difficulty: formData.difficulty,
    })
  ));

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
    setEditableQuestions((prev) => [
      ...prev,
      {
        questionText: "",
        options: ["", "", "", ""],
        answer: "",
        explanation: "",
        questionType: "Multiple Choice",
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
      case "details":
        return (
          <div className="quiz-box">
            <h2 className="quiz-heading">Quiz Information</h2>

            <label className="quiz-label">Quiz Title</label>
            <input className="quiz-input" value={formData.title} readOnly />

            <label className="quiz-label">Topic</label>
            <input className="quiz-input" value={formData.category} readOnly />

            <label className="quiz-label">Difficulty Level</label>
            <input
              className="quiz-input"
              value={formData.difficulty}
              readOnly
            />

            <label className="quiz-label">Number of Questions</label>
            <input
              className="quiz-input"
              value={formData.numberOfQuestions}
              readOnly
            />

            <label className="quiz-label">Time Limit (mins)</label>
            <input className="quiz-input" value={formData.timeLimit} readOnly />

            <label className="quiz-label">Image Link</label>
            <input className="quiz-input" value={formData.image} readOnly />

            <label className="quiz-label">Additional Information</label>
            <textarea
              className="quiz-textarea"
              value={formData.description}
              readOnly
            />
          </div>
        );

      case "questions":
        return (
          <div className="question-editor">
            <div className="question-header">
              <h3>Questions</h3>
              <button className="add-btn" onClick={addQuestion}>
                ➕ Add Question
              </button>
            </div>
            {editableQuestions.map((q, i) => (
              <div
                key={i}
                className={`question-item ${
                  expandedIndex === i ? "expanded" : ""
                }`}
              >
                <div className="question-title" onClick={() => toggleExpand(i)}>
                  <strong>Question {i + 1}</strong>
                  <div className="question-actions">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        moveQuestion(i, i - 1);
                      }}
                    >
                      <i className="fas fa-arrow-up"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        moveQuestion(i, i + 1);
                      }}
                    >
                      <i className="fas fa-arrow-down"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteQuestion(i);
                      }}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                {expandedIndex === i && (
                  <div className="question-body">
                    <label>Question Text</label>
                    <textarea
                      value={q.questionText}
                      onChange={(e) =>
                        updateQuestion(i, "questionText", e.target.value)
                      }
                    />

                    <label>Options</label>
                    {q.options.map((opt, idx) => (
                      <div key={idx} className="option-row">
                        <input
                          type="radio"
                          name={`answer-${i}`}
                          checked={q.correctAnswer === opt}
                          onChange={() => updateQuestion(i, "answer", opt)}
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
                      value={q.explanation || ""}
                      onChange={(e) =>
                        updateQuestion(i, "explanation", e.target.value)
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case "settings":
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
          className={`quiz-tab ${activeTab === "generator" ? "active" : ""}`}
          onClick={() => setActiveTab("generator")}
        >
          AI Generator
        </button>
        <button
          className={`quiz-tab ${showQuestionList ? "" : "disabled"} ${
            activeTab === "editor" ? "active" : ""
          }`}
          onClick={() => showQuestionList && setActiveTab("editor")}
        >
          Edit Generated Quiz
        </button>
      </div>

      {/* === Generator Form === */}
      {activeTab === "generator" && (
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
              name="category"
              value={formData.category}
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
                <input
                  type="number"
                  className="quiz-select"
                  name="numberOfQuestions"
                  value={formData.numberOfQuestions}
                  onChange={handleChange}
                >
                  
                </input>
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

            <label className="quiz-label">Image URL</label>
            <input
              className="quiz-input"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="e.g., https://www.aegissofttech.com/insights/ai-interview-questions-for-java/"
            />

            <label className="quiz-label">Required percentage %</label>
            <input
              className="quiz-input"
              type="number"
              name="requiredPercentage"
              value={formData.requiredPercentage}
              onChange={handleChange}
              placeholder="50"
            />

            <label className="quiz-label">
              Additional Information (Optional)
            </label>
            <textarea
              className="quiz-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Any specific requirements or focus areas for the quiz"
            ></textarea>

            <button type="submit" className="quiz-generate-btn">
              Generate Quiz
            </button>
          </form>

          {showQuestionList && (
            <div className="quiz-results">
              <h3 className="quiz-success">Quiz Generated Successfully!</h3>
              <p className="quiz-message">
                Your quiz on "{formData.topic}" has been generated with{" "}
                {formData.numberOfQuestions} {formData.difficulty} difficulty
                questions.
                <br />
                Click the "Edit Generated Quiz" tab above to review and
                customize your quiz before publishing.
              </p>

              <h4 className="quiz-subheading">Generated Questions:</h4>
              {questionList.map((q, idx) => (
                <div key={idx} className="quiz-card">
                  <div className="quiz-card-header">
                    <strong>
                      Q{idx + 1}: {q.questionText}
                    </strong>
                    <span className={`badge badge-${q.difficulty}`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <ul className="quiz-options">
                    {q.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                  <p className="quiz-answer">
                    <strong>Answer:</strong> {q.correctAnswer}
                  </p>
                  <p className="quiz-type">
                    <strong>Type:</strong> {q.type}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* === Edit Quiz View === */}
      {activeTab === "editor" && (
        <div className="quiz-edit-section">
          <div className="quiz-tabs inner-tabs">
            <button
              className={`quiz-tab ${editorTab === "details" ? "active" : ""}`}
              onClick={() => setEditorTab("details")}
            >
              Quiz Details
            </button>
            <button
              className={`quiz-tab ${
                editorTab === "questions" ? "active" : ""
              }`}
              onClick={() => setEditorTab("questions")}
            >
              Questions
            </button>
          </div>

          {renderEditorTabContent()}
        </div>
      )}
    </div>
  );
};

export default AiQuizGenerator;
