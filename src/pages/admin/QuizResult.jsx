
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
        return <span className="quiz-status-label_quizResult text-success">Correct Answer</span>;
      case 'incorrect':
        return <span className="quiz-status-label_quizResult text-danger">Incorrect Answer</span>;
      case 'skipped':
        return <span className="quiz-status-label_quizResult text-info">Skipped</span>;
      case 'partial':
        return <span className="quiz-status-label_quizResult text-warning">Half Answer</span>;
      default:
        return null;
    }
  };

  const getBorderClass = (type) => `quiz-card_quizResult ${type}`;

  const isChecked = (type, option, selected) => {
    if (!selected) return false;
    return Array.isArray(selected) ? selected.includes(option) : selected === option;
  };

  const getOptionClass = (option, selected, correctAnswer, type) => {
    const isSelected = isChecked(type, option, selected);
    const isCorrect = Array.isArray(correctAnswer) ? correctAnswer.includes(option) : correctAnswer === option;
    const isIncorrect = isSelected && !isCorrect && type === 'incorrect';

    return `quiz-option-label_quizResult ${isSelected ? 'selected_quizResult' : ''} ${
      isCorrect ? 'correct-answer_quizResult' : ''
    } ${isIncorrect ? 'incorrect-answer_quizResult' : ''}`.trim();
  };

  return (
    <div className="quiz-container_quizResult">
      <div className="quiz-header-container_quizResult">
        <h1 className="quiz-header_quizResult">Quiz - Sample results</h1>
        <p className="quiz-description_quizResult">
          These sample results represent what you'll see for each candidate when they submit their test.
        </p>
      </div>

      <div className="quiz-summary_quizResult">
        <div className="quiz-summary-card_quizResult">
          <h3>{quizData.correct}</h3>
          <span className="quiz-summary-label_quizResult text-success">Correct Answers</span>
        </div>
        <div className="quiz-summary-card_quizResult">
          <h3>{quizData.incorrect}</h3>
          <span className="quiz-summary-label_quizResult text-danger">Incorrect Answers</span>
        </div>
        <div className="quiz-summary-card_quizResult">
          <h3 className="text-success">{quizData.score}</h3>
          <span className="quiz-summary-label_quizResult">Total score</span>
        </div>
      </div>

      {quizData.questions.map((q) => (
        <div key={q.id} className={getBorderClass(q.type)}>
          <div className="quiz-card-header_quizResult">
            {renderStatusLabel(q.type)}
            <div className="quiz-meta_quizResult">
              <span className="quiz-time_quizResult">
                Time Taken: <b>{q.timeTaken}</b>
              </span>
              <span className="quiz-points_quizResult">{q.points} Points</span>
            </div>
          </div>

          <div className="quiz-body_quizResult">
            <span className="quiz-question-id_quizResult">Question {q.id}</span>
            <h3 className="quiz-question_quizResult">{q.question}</h3>

            <div className="quiz-options_quizResult">
              {q.options.map((opt, index) => (
                <label className={getOptionClass(opt, q.selected, q.correctAnswer, q.type)} key={index}>
                  <input
                    type={q.typeInput}
                    disabled
                    checked={isChecked(q.typeInput, opt, q.selected)}
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