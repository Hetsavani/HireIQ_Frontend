import React from 'react';
import './CandidateDashboard.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const UpperPart_CD = () => {
    return (
        <div className="upper-part_CD">
            <h1 className="upper-title_CD">Your Quiz Adventure</h1>
            <h2 className="upper-subtitle_CD">Starts Here <br /> Play, Share, Learn!</h2>
            <p className="upper-description_CD">Build engaging quizzes, challenge others, and learn new things <br />for your knowledge</p>
            <div className="upper-buttons_CD">
                {/* <button className="create-btn_CD">Create Quiz</button> */}
                <NavLink to={"botConversation"} className="join-btn_CD" style={{textDecoration:"none"}}>Join Contest</NavLink>
            </div>
        </div>
    );
};

// const QuizCategory_CD = () => {
//     return (
//         <div className="categories-container_CD">
//             <h3 className="categories-title_CD">Quiz Categories</h3>

//             <div className="carousel-container_CD">
//                 <div className="carousel-track_CD">
//                     {[
//                         { name: 'Movies', image: 'src/assets/img/quizCategory/code.jpeg' },
//                         { name: 'Science', image: 'src/assets/img/quizCategory/html.jpeg' },
//                         { name: 'History', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
//                         { name: 'Sports', image: 'src/assets/img/quizCategory/react.jpeg' },
//                         { name: 'Music', image: '/_next/static/media/music.jpg' },
//                         { name: 'Technology', image: '/_next/static/media/tech.jpg' },
//                         { name: 'Geography', image: '/_next/static/media/geo.jpg' },
//                         { name: 'Literature', image: '/_next/static/media/lit.jpg' },
//                     ].map((category, index) => (
//                         <div 
//                             className="category-card_CD" 
//                             key={index} 
//                             style={{ backgroundImage: `url(${category.image})` }}
//                         >
//                             <div className="card-overlay_CD">
//                                 <h4 className="category-name_CD">{category.name}</h4>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

const LatestQuiz_CD = () => {

    // const quizzes = [
    //     { 
    //         quizId: 1, 
    //         title: 'Advanced JavaScript', 
    //         // category: 'Programming', 
    //         // difficulty: 'Hard', 
    //         timeLimit: '45 min', 
    //         // date: '2025-07-18', 
    //         // image: 'src/assets/img/quizCategory/code.jpeg' 
    //         requiredPercentage : 10,
    //         description: "",
    //         createdBy: "",
    //         questions: []
    //     }
    //     // { 
    //     //     id: 1, 
    //     //     title: 'Maths Challenge', 
    //     //     category: 'Geography', 
    //     //     difficulty: 'Medium', 
    //     //     time: '30 min', 
    //     //     date: '2025-07-15', 
    //     //     image: 'src/assets/img/quizCategory/code.jpeg' 
    //     // },
    //     // { 
    //     //     id: 2, 
    //     //     title: 'Science Trivia', 
    //     //     category: 'Science', 
    //     //     difficulty: 'Hard', 
    //     //     time: '45 min', 
    //     //     date: '2025-07-14', 
    //     //     image: 'src/assets/img/quizCategory/html.jpeg' 
    //     // },
    //     // { 
    //     //     id: 3, 
    //     //     title: 'History Quiz', 
    //     //     category: 'History', 
    //     //     difficulty: 'Easy', 
    //     //     time: '20 min', 
    //     //     date: '2025-07-13', 
    //     //     image: 'src/assets/img/quizCategory/JAVA.jpeg' 
    //     // },
    //     //  { 
    //     //     id: 2, 
    //     //     title: 'Science Trivia', 
    //     //     category: 'Science', 
    //     //     difficulty: 'Hard', 
    //     //     time: '45 min', 
    //     //     date: '2025-07-14', 
    //     //     image: 'src/assets/img/quizCategory/html.jpeg' 
    //     // },
    // ];

    // return (
    //     <div className="latest-quiz-container_CD">
    //         <h3 className="latest-quiz-title_CD">Latest Quiz</h3>
    //         <div className="quiz-grid_CD">
    //             {quizzes.map((quiz) => (
    //                 <div key={quiz.quizId} className="quiz-card_CD">
    //                     <div className="quiz-card-content_CD">
    //                         <div className="quiz-header_CD">
    //                             <img 
    //                                 src="src/assets/img/quizCategory/code.jpeg" 
    //                                 alt={quiz.title} 
    //                                 className="quiz-image_CD" 
    //                             />
    //                             <div className="quiz-details_CD">
    //                                 <h5 className="quiz-title_CD">{quiz.title}</h5>
    //                                 <span className="quiz-date_CD">{quiz.createdBy}</span>
    //                                 <span className="quiz-time-badge_CD">{quiz.timeLimit}</span>
    //                                 <p className="quiz-difficulty_CD">⭐ {quiz.difficulty}</p>
    //                             </div>
    //                         </div>
    //                         <p className="quiz-category_CD">Category: {quiz.description==""?"JavaScript":quiz.description}</p>
    //                         <div className="quiz-footer_CD">
    //                             <a 
    //                                 href={`/quiz/${quiz.quizId}`} 
    //                                 className="quiz-action-btn_CD"
    //                             >
    //                                 Apply Now
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );


    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/quiz/quizzes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                console.log(res.data);
                setQuizzes(res.data || []); // backend must return `quizzes` array
            } catch (err) {
                console.error("Failed to fetch quizzes:", err);
                setError("Failed to load quizzes.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    if (loading) return <p>Loading quizzes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="latest-quiz-container_CD">
            <h3 className="latest-quiz-title_CD">Latest Quiz</h3>
            <div className="quiz-grid_CD">
                {quizzes.map((quiz) => (
                    <div key={quiz.quizId} className="quiz-card_CD">
                        <div className="quiz-card-content_CD">
                            <div className="quiz-header_CD">
                                <img 
                                    src={quiz.image} 
                                    alt={quiz.title} 
                                    className="quiz-image_CD" 
                                />
                                <div className="quiz-details_CD">
                                    <h5 className="quiz-title_CD">{quiz.title}</h5>
                                    <span className="quiz-date_CD">{quiz.createdBy?.name}</span>
                                    <span className="quiz-time-badge_CD">{quiz.timeLimit / 60} min</span>
                                    <p className="quiz-difficulty_CD">⭐ {quiz.difficulty || 'Medium'}</p>
                                </div>
                            </div>
                            <p className="quiz-category_CD">
                                Category: {quiz.description || "JavaScript"}
                            </p>
                            <div className="quiz-footer_CD">
                                <a 
                                    href={`/quiz/${quiz.quizId}`} 
                                    className="quiz-action-btn_CD"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
const OptionalCard_CD = () => {
    // const quizzes = [
    //     // { 
    //     //     quizId: 1, 
    //     //     title: 'Advanced JavaScript', 
    //     //     // category: 'Programming', 
    //     //     // difficulty: 'Hard', 
    //     //     timeLimit: '45 min', 
    //     //     // date: '2025-07-18', 
    //     //     // image: 'src/assets/img/quizCategory/code.jpeg' 
    //     //     requiredPercentage : 10,
    //     //     description: "",
    //     //     createdBy: "",
    //     //     questions: []
    //     // },
    //     { 
    //         id: 2, 
    //         title: 'React Patterns', 
    //         category: 'Web Dev', 
    //         difficulty: 'Medium', 
    //         time: '35 min', 
    //         date: '2025-07-17', 
    //         image: 'src/assets/img/quizCategory/react.jpeg' 
    //     },
    //     { 
    //         id: 3, 
    //         title: 'CSS Mastery', 
    //         category: 'Web Design', 
    //         difficulty: 'Easy', 
    //         time: '25 min', 
    //         date: '2025-07-16', 
    //         image: 'src/assets/img/quizCategory/html.jpeg' 
    //     },
    // ];

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/quiz/quizzes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                console.log(res.data);
                setQuizzes(res.data || []); // backend must return `quizzes` array
            } catch (err) {
                console.error("Failed to fetch quizzes:", err);
                setError("Failed to load quizzes.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    if (loading) return <p>Loading quizzes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="featured-quizzes_CD">
            <header className="featured-header_CD">
                <h2 className="featured-title_CD">Featured Quizzes</h2>
                <p className="featured-subtitle_CD">Test your knowledge with our premium challenges</p>
            </header>
            
            <div className="featured-grid_CD">
                {quizzes.map((quiz) => (
                    <article key={quiz._id} className="featured-card_CD">
                        <div className="featured-media_CD">
                            <img 
                                src={quiz.image} 
                                alt={quiz.title} 
                                className="featured-image_CD" 
                                loading="lazy"
                            />
                            <span className={`difficulty-badge_CD difficulty-${quiz.difficulty?.toLowerCase()}_CD`}>
                                {quiz.difficulty}
                            </span>
                        </div>
                        
                        <div className="featured-content_CD">
                            <div className="quiz-meta_CD">
                                <span className="quiz-category_CD">{quiz.category}</span>
                                <span className="quiz-duration_CD">
                                    <svg className="duration-icon_CD" width="16" height="16" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="2"/>
                                        <polyline points="12 6 12 12 16 14" stroke="currentColor" fill="none" strokeWidth="2"/>
                                    </svg>
                                    <span className="cq-date">
                                    {new Date(quiz.createdAt).toLocaleString('en-IN', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true,
                                    })}
                                    </span>

                                </span>
                            </div>
                            
                            <h3 className="featured-quiz-title_CD">{quiz.title}</h3>
                            
                            <footer className="featured-footer_CD">
                                <time className="quiz-date_CD">
                                    <svg className="date-icon_CD" width="16" height="16" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    {new Date(quiz.createdAt).toLocaleString('en-IN', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </time>
                                <a 
                                    href={`/quiz/${quiz.quizId}`} 
                                    className="featured-action_CD"
                                    aria-label={`Start ${quiz.title} quiz`}
                                >
                                    Begin Quiz
                                    <svg className="action-icon_CD" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2"/>
                                    </svg>
                                </a>
                            </footer>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const CandidateDashboard= () => {
    return (
        <div className="dashboard-container_CD">
            <UpperPart_CD />
            {/* <QuizCategory_CD /> */}
            {/* <LatestQuiz_CD /> */}
            <OptionalCard_CD />
        </div>
    );
};

export default CandidateDashboard;