
// import React, { useState, useRef, useEffect } from 'react';
// import './QuizPage.css';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


// const QuizPage = () => {
//   const [QuizData,setQuizData] = useState();
//   const [questions,setquestions] = useState([]);

//   const [TOTAL_QUIZ_TIME,setTOTAL_QUIZ_TIME] = useState(30 * 60 * 1000); 
//   const [WARNING_TIME,setWARNING_TIME] = useState(5 * 60 * 1000);

//   const [started, setStarted] = useState(false);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
//   const [finished, setFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(TOTAL_QUIZ_TIME);
//   const [showWarning, setShowWarning] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [timeTaken, setTimeTaken] = useState(0);
//   const quizRef = useRef(null);
//   const timerRef = useRef(null);
  
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const { quizId: quizId } = useParams();
//   const token = localStorage.getItem('token');


//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/quiz/join/${quizId}`,
//           {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//         );
//         console.log(response.data.quiz);
//         console.log(response.data.quiz.timeLimit/60);
//         setQuizData(response.data.quiz);
//         // quizData.timeLimit = quizData.timeLimit/60;
//         setTOTAL_QUIZ_TIME(response.data.quiz.timeLimit*1000);
//         // setTimeTaken(response.data.quiz.timeLimit*1000);
//         setTimeLeft(response.data.quiz.timeLimit*1000);

//         setquestions(response.data.quiz.questions);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching quiz:", err);
//         setError("Failed to load quiz.");
//         setLoading(false);
//       }
//     };

//     fetchQuizzes();
//   }, []);

//   // Fullscreen + disable shortcuts + timer
//   useEffect(() => {
//     if (started) {
//       setStartTime(Date.now());
      
//       setTimeout(() => {
//         const elem = quizRef.current;
//         if (elem.requestFullscreen) elem.requestFullscreen();
//         else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
//       }, 100);

//       timerRef.current = setInterval(() => {
//         setTimeLeft(prev => {
//           const newTime = prev - 1000;
//           if (newTime <= 0) {
//             clearInterval(timerRef.current);
//             setFinished(true);
//             setTimeTaken(TOTAL_QUIZ_TIME);
//             return 0;
//           }
//           return newTime;
//         });
//       }, 1000);
//     }

//     const blockKeys = (e) => {
//       if (started) {
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
      
//       if (!timeTaken) {
//         setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
//       }
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
//     const totalSeconds = Math.floor(ms / 1000);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const handleFinish = async() => {

//     const submission = {
//       userId: localStorage.getItem("userId"),
//       quizId: quizId,
//       responses: userAnswers,
//       score : questions.reduce((acc, q, i) => 
//         acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0),
//       totalQuestions: questions.length,
//       percentage: questions.reduce((acc, q, i) => 
//         acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0)/questions.length*100,
//       startedAt: startTime,
//       submittedAt: new Date().toISOString(),
//       eligibility: score/questions.length*100 >= QuizData.requiredPercentage ? "Eligibile" : "Not Eligibile",
//     }

//     console.log(submission);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:3000/api/submissions/submit",
//         submission,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("✅ Submission successful:", response.data);
//       setFinished(true);
//       setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
//       clearInterval(timerRef.current);
//     } catch (error) {
//       console.error("❌ Submission failed:", error.response?.data || error.message);
//       alert("Failed to submit quiz. Please try again.");
//     }
    
//     setFinished(true);
//     setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
//     clearInterval(timerRef.current);
//   };

//   return (
//     <div ref={quizRef} className="QuizPage-wrapper">
//       {!started ? (
//         <div className="QuizPage-start-screen">
//           <h2>Ready to Start Quiz?</h2>
//           <p className="QuizPage-time-info">Total time: {formatTime(TOTAL_QUIZ_TIME)}</p>
//           <button className="QuizPage-start-btn" onClick={() => {
//             setStarted(true)
//             setStartTime(new Date().toISOString())
//             }}>
//             Start Quiz
//           </button>
//         </div>
//       ) : finished ? (
//         <div className="QuizPage-results-screen">
//           <h2>Quiz Completed!</h2>
//           <p className="QuizPage-score">Your Score: {score}/{questions.length}</p>
//           <p className="QuizPage-time-taken">
//             Time Taken: {formatTime(timeTaken)} / {formatTime(TOTAL_QUIZ_TIME)}
//           </p>
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
//               onClick={handleFinish}
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
//             <p className="QuizPage-question-text">{questions[currentQ].questionText}</p>
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
import axios from 'axios';
import { useParams } from 'react-router-dom';


const QuizPage = () => {
  const [QuizData,setQuizData] = useState();
  const [questions,setquestions] = useState([]);

  const [TOTAL_QUIZ_TIME,setTOTAL_QUIZ_TIME] = useState(30 * 60 * 1000); 
  const [WARNING_TIME,setWARNING_TIME] = useState(5 * 60 * 1000);

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
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { quizId: quizId } = useParams();
  const token = localStorage.getItem('token');


  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/quiz/join/${quizId}`,
          {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        );
        console.log(response.data.quiz);
        console.log(response.data.quiz.timeLimit/60);
        setQuizData(response.data.quiz);
        // quizData.timeLimit = quizData.timeLimit/60;
        setTOTAL_QUIZ_TIME(response.data.quiz.timeLimit*1000);
        // setTimeTaken(response.data.quiz.timeLimit*1000);
        setTimeLeft(response.data.quiz.timeLimit*1000);

        setquestions(response.data.quiz.questions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setError("Failed to load quiz.");
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

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

  const handleFinish = async() => {

    const submission = {
      userId: localStorage.getItem("userId"),
      quizId: QuizData._id,
      responses: userAnswers.map((val,index)=>({
        questionId : questions[index]._id,
        selectedAnswer : val,
        answer : questions[index].correctAnswer,
        isCorrect : val === questions[index].correctAnswer
      })),
      score : questions.reduce((acc, q, i) => 
        acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0),
      totalQuestions: questions.length,
      percentage: questions.reduce((acc, q, i) => 
        acc + (userAnswers[i] === q.correctAnswer ? 1 : 0), 0)/questions.length*100,
      startedAt: startTime,
      submittedAt: new Date().toISOString(),
      eligibility: (score/questions.length*100) >= QuizData.requiredPercentage ? "Eligible" : "Not Eligible",
    }

    console.log(submission);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/submissions/submit",
        submission,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Submission successful:", response.data);
      setFinished(true);
      setTimeTaken(TOTAL_QUIZ_TIME - timeLeft);
      clearInterval(timerRef.current);
    } catch (error) {
      console.error("❌ Submission failed:", error.response?.data || error.message);
      alert("Failed to submit quiz. Please try again.");
    }
    
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
          <button className="QuizPage-start-btn" onClick={() => {
            setStarted(true)
            setStartTime(new Date().toISOString())
            }}>
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
            <p className="QuizPage-question-text">{questions[currentQ].questionText}</p>
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


