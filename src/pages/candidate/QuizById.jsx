// import { NavLink } from 'react-router-dom';
// import './QuizById.css';
// import { ChevronLeft, Clock, Users, HelpCircle, Star, Bookmark, Share, Lock } from 'lucide-react';

// const QuizById = (props) => {
//   const {
//     title = "Space Exploration Quiz",
//     duration = "20 min",
//     questions = "25 questions",
//     category = "Science & Technology",
//     questionCount = "25",
//     timeLimit = "20 min",
//     difficulty = "Medium",
//     creatorName = "MarvelFan2023",
//     creatorTitle = "Expert Quiz Creator",
//     quizzesMade = "42",
//     lastUpdated = "2023-10-15"
//   } = props;

//   return (
//     <div className="quiz-container">
//       {/* Header */}
//       <div className="quiz-header">
//         <div className="back-button">
//           <ChevronLeft size={20} />
//           <NavLink to={"/candidate/ExploreQuiz"} style={{color:'#aaa', textDecoration:"none"}}>Back to Explore</NavLink>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="quiz-main">
//         {/* Left Content */}
//         <div className="quiz-left">
//           {/* Hero Section */}
//           <div
//             className="quiz-hero"
//             style={{ backgroundImage: 'url(https://csspicker.dev/api/image/?q=pyramids+ancient+sunset&image_type=photo)' }}
//           >
//             <div className="quiz-hero-overlay">
//               <div className="quiz-tags">
//                 <span className="tag yellow">OOP</span>
//                 <span className="tag purple">Java</span>
//                 <span className="tag blue">Python</span>
//               </div>
//               <h1>{title}</h1>
//               <div className="quiz-meta">
//                 <div><Clock size={16} /><span>{duration}</span></div>
//                 {/* <div><Users size={16} /><span>{players}</span></div> */}
//                 <div><HelpCircle size={16} /><span>{questions}</span></div>
//                 {/* <div><Star size={16} /><span>{rating}</span></div> */}
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="quiz-tabs">
//             <button className="active">Overview</button>
//             {/* <button>Leaderboard</button>
//             <button>Reviews</button> */}
//           </div>

//           {/* Description */}
//           <div className="quiz-section">
//             <h2>Description</h2>
//             <p>Test your knowledge of the Space Exploration with this comprehensive trivia quiz...</p>
//           </div>

//           {/* Requirements */}
//           {/* <div className="quiz-section">
//             <h2>Requirements</h2>
//             <p>Basic knowledge of Marvel movies and TV shows. No specific preparation needed.</p>
//           </div> */}

//           {/* Tags */}
//           {/* <div className="quiz-section">
//             <h2>Tags</h2>
//             <div className="quiz-tags-list">
//               {['Marvel', 'Superheroes', 'Movies', 'MCU', 'Avengers'].map(tag => (
//                 <span key={tag} className="tag dark">{tag}</span>
//               ))}
//             </div>
//           </div> */}

//           {/* Related Quizzes */}
//           {/* <div className="quiz-section">
//             <h2>Related Quizzes</h2>
//             <div className="quiz-grid">
//               {[
//                 { title: 'DC Extended Universe Quiz', difficulty: 'Hard', image: 'superhero+dc+comics' },
//                 { title: 'Star Wars Saga Trivia', difficulty: 'Medium', image: 'star+wars+space' },
//                 { title: 'Harry Potter Wizarding World', difficulty: 'Easy', image: 'harry+potter+magic' }
//               ].map((quiz, index) => (
//                 <div key={index} className="quiz-card">
//                   <div
//                     className="quiz-card-img"
//                     style={{ backgroundImage: `url(https://csspicker.dev/api/image/?q=${quiz.image}&image_type=photo)` }}
//                   >
//                     <span className={`difficulty-tag ${quiz.difficulty.toLowerCase()}`}>{quiz.difficulty}</span>
//                   </div>
//                   <div className="quiz-card-body">
//                     <h3>{quiz.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//         </div>

//         {/* Right Sidebar */}
//         <div className="quiz-sidebar">
//           <div className="quiz-sidebar-box">
//             {/* <div className="sidebar-row">
//               <span>Spots Filled</span>
//               <span>{spotsLeft}</span>
//             </div> */}
//             {/* <div className="progress-bar">
//               <div className="progress-bar-fill" style={{ width: '95%' }}></div>
//             </div> */}

//             <div className="sidebar-meta">
//               <div className="sidebar-row">
//                 <span>Category</span>
//                 <span>Questions</span>
//               </div>
//               <div className="sidebar-row bold">
//                 <span>{category}</span>
//                 <span>{questionCount}</span>
//               </div>
//               <div className="sidebar-row">
//                 <span>Time Limit</span>
//                 <span>Difficulty</span>
//               </div>
//               <div className="sidebar-row bold">
//                 <span>{timeLimit}</span>
//                 <span>{difficulty}</span>
//               </div>
//             </div>

//             <div className="sidebar-creator">
//               <div className="creator-info">
//                 <div className="avatar">M</div>
//                 <div>
//                   <div className="creator-name">{creatorName}</div>
//                   <div className="creator-title">{creatorTitle}</div>
//                 </div>
//               </div>
//               {/* <div className="creator-meta">
//                 <span>Quizzes: {quizzesMade}</span>
//                 <span>Updated: {lastUpdated}</span>
//               </div> */}
//             </div>

//             <button className="play-btn">Play Now</button>

//             {/* <div className="sidebar-icons">
//               <Bookmark size={20} />
//               <Share size={20} />
//               <Lock size={20} />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizById;

import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeft, Clock, HelpCircle } from 'lucide-react';
import './QuizById.css';

const QuizById = () => {
  const navigate = useNavigate();
  const { quizId: quizId } = useParams(); // URL param: /candidate/QuizById/:id
  const token = localStorage.getItem('token');

  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 🔹 Fetch Quiz Details
  useEffect(() => {
    const fetchQuiz = async () => {
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
        setQuizData(response.data.quiz);
        // quizData.timeLimit = quizData.timeLimit/60;
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setError("Failed to load quiz.");
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  // 🔹 Join Quiz on Play
  // const handlePlayNow = async () => {
  //   try {
  //     // const response = await axios.get(
  //     //   `http://localhost:3000/api/quiz/join/${quizId}`,
  //     //   {
  //     //     headers: {
  //     //       Authorization: `Bearer ${token}`,
  //     //       'Content-Type': 'application/json',
  //     //     },
  //     //   }
  //     // );
  //     navigate(`/candidate/quizpage/${response.data.quizId}`);
  //   } catch (err) {
  //     console.error("Failed to join quiz:", err);
  //     alert("Unable to join quiz. Please try again.");
  //   }
  // };

  if (loading) return <div className="quiz-container">Loading quiz...</div>;
  if (error) return <div className="quiz-container text-danger">{error}</div>;

  const {
    title,
    image,
    timeLimit,
    category="MCQs",
    difficulty="Medium",
    creatorName="Ronak",
    creatorTitle
  } = quizData;

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="back-button">
          <ChevronLeft size={20} />
          <NavLink to="/candidate/ExploreQuiz" style={{ color: '#aaa', textDecoration: 'none' }}>
            Back to Explore
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="quiz-main">
        {/* Left Section */}
        <div className="quiz-left">
         <div
          className="quiz-hero"
          style={{ backgroundImage: `url(${image})` }}
        >

            <div className="quiz-hero-overlay">
              <div className="quiz-tags">
                <span className="tag yellow">OOP</span>
                <span className="tag purple">Java</span>
                <span className="tag blue">Python</span>
              </div>
              <h1>{title}</h1>
              <div className="quiz-meta">
                <div><Clock size={16} /><span>{timeLimit}</span></div>
                <div><HelpCircle size={16} /><span>{quizData.questions.length} questions</span></div>
              </div>
            </div>
          </div>

          <div className="quiz-tabs">
            <button className="active">Overview</button>
          </div>

          <div className="quiz-section">
            <h2>Description</h2>
            <p>{quizData.description}<strong>{title}</strong>.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="quiz-sidebar">
          <div className="quiz-sidebar-box">
            <div className="sidebar-meta">
              <div className="sidebar-row">
                <span>Category</span>
                <span>Questions</span>
              </div>
              <div className="sidebar-row bold">
                <span>{category}</span>
                <span>{quizData.questions.length}</span>
              </div>
              <div className="sidebar-row">
                <span>Time Limit</span>
                <span>Difficulty</span>
              </div>
              <div className="sidebar-row bold">
                <span>{timeLimit}</span>
                <span>{difficulty}</span>
              </div>
            </div>

            <div className="sidebar-creator">
              <div className="creator-info">
                <div className="avatar">{creatorName?.[0] || 'U'}</div>
                <div>
                  <div className="creator-name">{creatorName}</div>
                  <div className="creator-title">{creatorTitle}</div>
                </div>
              </div>
            </div>

            <NavLink className="btn play-btn" to={"/candidate/quizpage/"+quizData.quizId}>Play Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizById;
