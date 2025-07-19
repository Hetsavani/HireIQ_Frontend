// import React, { useState, useRef, useEffect } from 'react';
// import './QuizPage.css';

// const questions = [
//   { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
//   { question: "What is 3 × 3?", options: ["6", "9", "12", "15"], correctAnswer: "9" },
//   { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: "Paris" },
//   { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars" },
//   { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correctAnswer: "Blue Whale" },
//   { question: "Which language is used for web development?", options: ["Java", "C++", "Python", "JavaScript"], correctAnswer: "JavaScript" },
//   { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: "Au" },
//   { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], correctAnswer: "Da Vinci" },
//   { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond" },
//   { question: "Which country is home to the kangaroo?", options: ["South Africa", "Brazil", "Australia", "New Zealand"], correctAnswer: "Australia" }
// ];

// const TOTAL_QUIZ_TIME = 30 * 60 * 1000; // 30 minutes
// const WARNING_TIME = 5 * 60 * 1000; // 5 minutes

// const QuizPage = () => {
//   const [started, setStarted] = useState(false);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
//   const [finished, setFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(TOTAL_QUIZ_TIME);
//   const [showWarning, setShowWarning] = useState(false);
//   const quizRef = useRef(null);
//   const timerRef = useRef(null);

//   // Fullscreen + disable shortcuts + timer
//   useEffect(() => {
//     if (started) {
//       // Enter fullscreen
//       setTimeout(() => {
//         const elem = quizRef.current;
//         if (elem.requestFullscreen) elem.requestFullscreen();
//         else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
//       }, 100);

//       // Start timer
//       timerRef.current = setInterval(() => {
//         setTimeLeft(prev => {
//           const newTime = prev - 1000;
//           if (newTime <= 0) {
//             clearInterval(timerRef.current);
//             setFinished(true);
//             return 0;
//           }
//           return newTime;
//         });
//       }, 1000);
//     }

//     // Block all keyboard shortcuts
//     const blockKeys = (e) => {
//       if (started) {
//         // Block function keys, Escape, Ctrl, Alt, etc.
//         if (e.key.startsWith('F') || 
//             e.key === 'Escape' || 
//             e.ctrlKey || 
//             e.altKey || 
//             e.metaKey ||
//             e.key === 'Tab') {
//           e.preventDefault();
//         }
//       }
//     };

//     // Block right click and other mouse tricks
//     const blockMouse = (e) => {
//       if (started) {
//         e.preventDefault();
//         if (e.button === 2 || e.buttons === 4) return false;
//       }
//     };

//     document.addEventListener('keydown', blockKeys);
//     document.addEventListener('contextmenu', blockMouse);
//     document.addEventListener('auxclick', blockMouse);

//     return () => {
//       clearInterval(timerRef.current);
//       document.removeEventListener('keydown', blockKeys);
//       document.removeEventListener('contextmenu', blockMouse);
//       document.removeEventListener('auxclick', blockMouse);
//     };
//   }, [started]);

//   // Show warning when 5 minutes left
//   useEffect(() => {
//     if (timeLeft <= WARNING_TIME && timeLeft > 0 && !showWarning) {
//       setShowWarning(true);
//       alert('Warning: Only 5 minutes remaining!');
//     }
//   }, [timeLeft, showWarning]);

//   // Calculate score when finished
//   useEffect(() => {
//     if (finished) {
//       const correct = questions.reduce((acc, q, i) => 
//         acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0);
//       setScore(correct);
//     }
//   }, [finished]);

//   const handleOptionSelect = (option) => {
//     const updated = [...userAnswers];
//     updated[currentQ] = option;
//     setUserAnswers(updated);
//   };

//   const getStatus = (index) => {
//     if (userAnswers[index]) return 'QuizPage-answered';
//     if (index < currentQ) return 'QuizPage-skipped';
//     return 'QuizPage-pending';
//   };

//   const progress = ((currentQ + 1) / questions.length) * 100;

//   const formatTime = (ms) => {
//     const minutes = Math.floor(ms / 60000);
//     const seconds = Math.floor((ms % 60000) / 1000);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div ref={quizRef} className="QuizPage-wrapper">
//       {!started ? (
//         <div className="QuizPage-start-screen">
//           <h2>Ready to Start Quiz?</h2>
//           <p className="QuizPage-time-info">Total time: {formatTime(TOTAL_QUIZ_TIME)}</p>
//           <button className="QuizPage-start-btn" onClick={() => setStarted(true)}>
//             Start Quiz
//           </button>
//         </div>
//       ) : finished ? (
//         <div className="QuizPage-results-screen">
//           <h2>Quiz Completed!</h2>
//           <p className="QuizPage-score">Your Score: {score}/{questions.length}</p>
//           <p className="QuizPage-time-taken">Time Taken: {formatTime(TOTAL_QUIZ_TIME - timeLeft)}</p>
//         </div>
//       ) : (
//         <>
//           <div className="QuizPage-sidebar">
//             <h5>Questions</h5>
//             <div className="QuizPage-question-grid">
//               {questions.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`QuizPage-question-circle ${getStatus(index)} ${index === currentQ ? 'QuizPage-active' : ''}`}
//                   onClick={() => setCurrentQ(index)}
//                 >
//                   {index + 1}
//                 </div>
//               ))}
//             </div>
//             <div className={`QuizPage-timer ${showWarning ? 'QuizPage-warning' : ''}`}>
//               Time Left: {formatTime(timeLeft)}
//               {showWarning && <div className="QuizPage-time-warning">!</div>}
//             </div>
//             <button 
//               className="QuizPage-finish-btn" 
//               onClick={() => setFinished(true)}
//             >
//               Finish Test
//             </button>
//           </div>

//           <div className="QuizPage-content">
//             <div className="QuizPage-progress-bar">
//               <div 
//                 className="QuizPage-progress-fill" 
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//             <h4>Question {currentQ + 1}</h4>
//             <p className="QuizPage-question-text">{questions[currentQ].question}</p>
//             <div className="QuizPage-options-container">
//               {questions[currentQ].options.map((opt, i) => (
//                 <button
//                   key={i}
//                   className={`QuizPage-option-btn ${userAnswers[currentQ] === opt ? 'QuizPage-selected' : ''}`}
//                   onClick={() => handleOptionSelect(opt)}
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//             <div className="QuizPage-navigation-btns">
//               <button
//                 className="QuizPage-nav-btn"
//                 disabled={currentQ === 0}
//                 onClick={() => setCurrentQ(currentQ - 1)}
//               >
//                 Previous
//               </button>
//               <button
//                 className="QuizPage-nav-btn"
//                 disabled={currentQ === questions.length - 1}
//                 onClick={() => setCurrentQ(currentQ + 1)}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default QuizPage;


import React, { useState, useRef, useEffect } from 'react';
import './QuizPage.css';

const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
  { question: "What is 3 × 3?", options: ["6", "9", "12", "15"], correctAnswer: "9" },
  { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars" },
  { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correctAnswer: "Blue Whale" },
  { question: "Which language is used for web development?", options: ["Java", "C++", "Python", "JavaScript"], correctAnswer: "JavaScript" },
  { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: "Au" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], correctAnswer: "Da Vinci" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond" },
  { question: "Which country is home to the kangaroo?", options: ["South Africa", "Brazil", "Australia", "New Zealand"], correctAnswer: "Australia" }
];

const TOTAL_QUIZ_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds
const WARNING_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

const QuizPage = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_QUIZ_TIME);
  const [showWarning, setShowWarning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const quizRef = useRef(null);
  const timerRef = useRef(null);

  // Fullscreen + disable shortcuts + timer
  useEffect(() => {
    if (started) {
      setStartTime(Date.now());
      
      setTimeout(() => {
        const elem = quizRef.current;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      }, 100);

      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1000;
          if (newTime <= 0) {
            clearInterval(timerRef.current);
            setFinished(true);
            setTimeTaken(TOTAL_QUIZ_TIME);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    const blockKeys = (e) => {
      if (started) {
        if (e.key.startsWith('F') || 
            e.key === 'Escape' || 
            e.ctrlKey || 
            e.altKey || 
            e.metaKey ||
            e.key === 'Tab') {
          e.preventDefault();
        }
      }
    };

    const blockMouse = (e) => {
      if (started) {
        e.preventDefault();
        if (e.button === 2 || e.buttons === 4) return false;
      }
    };

    document.addEventListener('keydown', blockKeys);
    document.addEventListener('contextmenu', blockMouse);
    document.addEventListener('auxclick', blockMouse);

    return () => {
      clearInterval(timerRef.current);
      document.removeEventListener('keydown', blockKeys);
      document.removeEventListener('contextmenu', blockMouse);
      document.removeEventListener('auxclick', blockMouse);
    };
  }, [started]);

  // Show warning when 5 minutes left
  useEffect(() => {
    if (timeLeft <= WARNING_TIME && timeLeft > 0 && !showWarning) {
      setShowWarning(true);
      alert('Warning: Only 5 minutes remaining!');
    }
  }, [timeLeft, showWarning]);

  // Calculate score when finished
  useEffect(() => {
    if (finished) {
      const correct = questions.reduce((acc, q, i) => 
        acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0);
      setScore(correct);
      
      if (!timeTaken) {
        setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
      }
    }
  }, [finished]);

  const handleOptionSelect = (option) => {
    const updated = [...userAnswers];
    updated[currentQ] = option;
    setUserAnswers(updated);
  };

  const getStatus = (index) => {
    if (userAnswers[index]) return 'QuizPage-answered';
    if (index < currentQ) return 'QuizPage-skipped';
    return 'QuizPage-pending';
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleFinish = () => {
    setFinished(true);
    setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
    clearInterval(timerRef.current);
  };

  return (
    <div ref={quizRef} className="QuizPage-wrapper">
      {!started ? (
        <div className="QuizPage-start-screen">
          <h2>Ready to Start Quiz?</h2>
          <p className="QuizPage-time-info">Total time: {formatTime(TOTAL_QUIZ_TIME)}</p>
          <button className="QuizPage-start-btn" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      ) : finished ? (
        <div className="QuizPage-results-screen">
          <h2>Quiz Completed!</h2>
          <p className="QuizPage-score">Your Score: {score}/{questions.length}</p>
          <p className="QuizPage-time-taken">
            Time Taken: {formatTime(timeTaken)} / {formatTime(TOTAL_QUIZ_TIME)}
          </p>
        </div>
      ) : (
        <>
          <div className="QuizPage-sidebar">
            <h5>Questions</h5>
            <div className="QuizPage-question-grid">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`QuizPage-question-circle ${getStatus(index)} ${index === currentQ ? 'QuizPage-active' : ''}`}
                  onClick={() => setCurrentQ(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className={`QuizPage-timer ${showWarning ? 'QuizPage-warning' : ''}`}>
              Time Left: {formatTime(timeLeft)}
              {showWarning && <div className="QuizPage-time-warning">!</div>}
            </div>
            <button 
              className="QuizPage-finish-btn" 
              onClick={handleFinish}
            >
              Finish Test
            </button>
          </div>

          <div className="QuizPage-content">
            <div className="QuizPage-progress-bar">
              <div 
                className="QuizPage-progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <h4>Question {currentQ + 1}</h4>
            <p className="QuizPage-question-text">{questions[currentQ].question}</p>
            <div className="QuizPage-options-container">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  className={`QuizPage-option-btn ${userAnswers[currentQ] === opt ? 'QuizPage-selected' : ''}`}
                  onClick={() => handleOptionSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="QuizPage-navigation-btns">
              <button
                className="QuizPage-nav-btn"
                disabled={currentQ === 0}
                onClick={() => setCurrentQ(currentQ - 1)}
              >
                Previous
              </button>
              <button
                className="QuizPage-nav-btn"
                disabled={currentQ === questions.length - 1}
                onClick={() => setCurrentQ(currentQ + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;