// import React from 'react';
// import './CandidateDashboard.css';

// const UpperPart = () => {
//     return (
//         <>
//             <div className="upper-part">
//                 <h1>Your Quiz Adventure</h1>
//                 <h2>Starts Here: <br /> Play, Share, Earn!</h2>
//                 <p>Build engaging quizzes, challenge others, and earn rewards <br />for your knowledge</p>
//                 <div className="buttons">
//                     <button className="create-btn">Create Quiz</button>
//                     <button className="join-btn">Join Contest</button>
//                 </div>
//             </div>
//         </>

//     );
// };


// const QuizCatagory = () => {
//     return (
//         <div className="categories">
//             <h3>Quiz Categories</h3>

//             <div className="carousel-container">
//                 <div className="carousel-track">
//                     {[
//                         { name: 'Movies', image: 'src/assets/img/quizCategory/code.jpeg' },
//                         { name: 'Science', image: 'src/assets/img/quizCategory/html.jpeg' },
//                         { name: 'History', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
//                         { name: 'Sports', image: 'src/assets/img/quizCategory/react.jpeg' },
//                         { name: 'Music', image: '/_next/static/media/music.jpg' },
//                         { name: 'Movies', image: '/_next/static/media/movies.f5877cfd.webp' },
//                         { name: 'Science', image: '/_next/static/media/science.jpg' },
//                         { name: 'History', image: '/_next/static/media/history.jpg' },
//                         { name: 'Sports', image: '/_next/static/media/sports.jpg' },
//                         { name: 'Music', image: '/_next/static/media/music.jpg' },
//                     ].map((category, index) => (
//                         <div className="category-card" key={index} style={{ backgroundImage: `url(${category.image})` }}>
//                             <div className="card-overlay">
//                                 <h4>{category.name}</h4>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const LatestQuiz = () => {
//     const quizzes = [
//         { id: 1, title: 'Maths Challenge', category: 'Geography', difficulty: 'Medium', time: '30 min', date: '2025-07-15', image: 'src/assets/img/quizCategory/code.jpeg' },
//         { id: 2, title: 'Science Trivia', category: 'Science', difficulty: 'Hard', time: '45 min', date: '2025-07-14', image: 'src/assets/img/quizCategory/html.jpeg' },
//         { id: 3, title: 'History Quiz', category: 'History', difficulty: 'Easy', time: '20 min', date: '2025-07-13', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
//         { id: 4, title: 'Sports Mania', category: 'Sports', difficulty: 'Medium', time: '25 min', date: '2025-07-12', image: 'src/assets/img/quizCategory/react.jpeg' },
//         { id: 5, title: 'Music Trivia', category: 'Music', difficulty: 'Easy', time: '15 min', date: '2025-07-11', image: '/music-quiz.png' },
//         { id: 6, title: 'Movie Quiz', category: 'Movies', difficulty: 'Hard', time: '40 min', date: '2025-07-10', image: '/movie-quiz.png' },
//     ];

//     return (
//         <div className="latest-quiz">
//             <h3>Latest Quiz</h3>
//             <div className="quiz-grid">
//                 {quizzes.map((quiz) => (
//                     <div key={quiz.id} className="quiz-card">
//                         <div className="info-section ps-3 pt-0">
//                             <div className="quiz-header d-flex align-items-center">
//                                 <img src={quiz.image} alt={quiz.title} className="me-3" />
//                                 <div className="pt-3">
//                                     <h5 className="mb-1 fw-bold">{quiz.title}</h5>
//                                     <small className="fw-light">{quiz.date}</small><br />
//                                     <span className="badge bg-secondary mt-2">{quiz.time}</span>
//                                     <p className="mt-1">⭐ {quiz.difficulty}</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="m-0 text-secondary me-6">Category: {quiz.category}</p>
//                             </div>
//                             <div className="quiz-footer">
//                                 <a href={`/quiz/${quiz.id}`} className="btn btn-sm btn-secondary me-0">Apply Now</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// const CandidateDashboard = () => {
//     return (
//         <>

//             <UpperPart />
//             <QuizCatagory />
//             <LatestQuiz />

//         </>
//     );
// };

// export default CandidateDashboard;



import React from 'react';
import './CandidateDashboard.css';

const UpperPart = () => {
    return (
        <>
            <div className="upper-part">
                <h1>Your Quiz Adventure</h1>
                <h2>Starts Here: <br /> Play, Share, Earn!</h2>
                <p>Build engaging quizzes, challenge others, and earn rewards <br />for your knowledge</p>
                <div className="buttons">
                    <button className="create-btn">Create Quiz</button>
                    <button className="join-btn">Join Contest</button>
                </div>
            </div>
        </>

    );
};


const QuizCatagory = () => {
    return (
        <div className="categories">
            <h3>Quiz Categories</h3>

            <div className="carousel-container">
                <div className="carousel-track">
                    {[
                        { name: 'Movies', image: 'src/assets/img/quizCategory/code.jpeg' },
                        { name: 'Science', image: 'src/assets/img/quizCategory/html.jpeg' },
                        { name: 'History', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
                        { name: 'Sports', image: 'src/assets/img/quizCategory/react.jpeg' },
                        { name: 'Music', image: '/_next/static/media/music.jpg' },
                        { name: 'Movies', image: '/_next/static/media/movies.f5877cfd.webp' },
                        { name: 'Science', image: '/_next/static/media/science.jpg' },
                        { name: 'History', image: '/_next/static/media/history.jpg' },
                        { name: 'Sports', image: '/_next/static/media/sports.jpg' },
                        { name: 'Music', image: '/_next/static/media/music.jpg' },
                    ].map((category, index) => (
                        <div className="category-card" key={index} style={{ backgroundImage: `url(${category.image})` }}>
                            <div className="card-overlay">
                                <h4>{category.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const LatestQuiz = () => {
    const quizzes = [
        { id: 1, title: 'Maths Challenge', category: 'Geography', difficulty: 'Medium', time: '30 min', date: '2025-07-15', image: 'src/assets/img/quizCategory/code.jpeg' },
        { id: 2, title: 'Science Trivia', category: 'Science', difficulty: 'Hard', time: '45 min', date: '2025-07-14', image: 'src/assets/img/quizCategory/html.jpeg' },
        { id: 3, title: 'History Quiz', category: 'History', difficulty: 'Easy', time: '20 min', date: '2025-07-13', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
        { id: 4, title: 'Sports Mania', category: 'Sports', difficulty: 'Medium', time: '25 min', date: '2025-07-12', image: 'src/assets/img/quizCategory/react.jpeg' },
        { id: 5, title: 'Music Trivia', category: 'Music', difficulty: 'Easy', time: '15 min', date: '2025-07-11', image: '/music-quiz.png' },
        { id: 6, title: 'Movie Quiz', category: 'Movies', difficulty: 'Hard', time: '40 min', date: '2025-07-10', image: '/movie-quiz.png' },
    ];

    return (
        <div className="latest-quiz">
            <h3>Latest Quiz</h3>
            <div className="quiz-grid">
                {quizzes.map((quiz) => (
                    <div key={quiz.id} className="quiz-card">
                        <div className="info-section ps-3 pt-0">
                            <div className="quiz-header d-flex align-items-center">
                                <img src={quiz.image} alt={quiz.title} className="me-3" />
                                <div className="pt-3">
                                    <h5 className="mb-1 fw-bold">{quiz.title}</h5>
                                    <small className="fw-light">{quiz.date}</small><br />
                                    <span className="badge bg-secondary mt-2">{quiz.time}</span>
                                    <p className="mt-1">⭐ {quiz.difficulty}</p>
                                </div>
                            </div>
                            <div>
                                <p className="m-0 text-secondary me-6">Category: {quiz.category}</p>
                            </div>
                            <div className="quiz-footer">
                                <a href={`/quiz/${quiz.id}`} className="btn btn-sm btn-secondary me-0">Apply Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const OptionalCard = () => {
    const quizzes = [
        { id: 1, title: 'Maths Challenge', category: 'Geography', difficulty: 'Medium', time: '30 min', date: '2025-07-15', image: 'src/assets/img/quizCategory/code.jpeg' },
        { id: 2, title: 'Science Trivia', category: 'Science', difficulty: 'Hard', time: '45 min', date: '2025-07-14', image: 'src/assets/img/quizCategory/html.jpeg' },
        { id: 3, title: 'History Quiz', category: 'History', difficulty: 'Easy', time: '20 min', date: '2025-07-13', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
        { id: 4, title: 'History Quiz', category: 'History', difficulty: 'Easy', time: '20 min', date: '2025-07-13', image: 'src/assets/img/quizCategory/JAVA.jpeg' },
        { id: 5, title: 'Science Trivia', category: 'Science', difficulty: 'Hard', time: '45 min', date: '2025-07-14', image: 'src/assets/img/quizCategory/html.jpeg' },


        // Only showing 3 cards for the example
        // { id: 4, title: 'Sports Mania', category: 'Sports', difficulty: 'Medium', time: '25 min', date: '2025-07-12', image: 'src/assets/img/quizCategory/react.jpeg' },
        // { id: 5, title: 'Music Trivia', category: 'Music', difficulty: 'Easy', time: '15 min', date: '2025-07-11', image: '/music-quiz.png' },
        // { id: 6, title: 'Movie Quiz', category: 'Movies', difficulty: 'Hard', time: '40 min', date: '2025-07-10', image: '/movie-quiz.png' },
    ];

    return (
        <section className="quiz-showcase" style={{ backgroundColor: '#0f121f' }}>
            <header className="quiz-showcase__header">
                <h2 className="quiz-showcase__title">Latest Quizzes</h2>
                <p className="quiz-showcase__subtitle">Test your knowledge with our newest challenges</p>
            </header>
            
            <div className="quiz-cards">
                {quizzes.map((quiz) => (
                    <article key={quiz.id} className="quiz-card">
                        <div className="quiz-card__media">
                            <img 
                                src={quiz.image} 
                                alt={quiz.title} 
                                className="quiz-card__image" 
                                loading="lazy"
                            />
                            <span className={`quiz-card__difficulty quiz-card__difficulty--${quiz.difficulty.toLowerCase()}`}>
                                {quiz.difficulty}
                            </span>
                        </div>
                        
                        <div className="quiz-card__content">
                            <div className="quiz-card__meta">
                                <span className="quiz-card__category">{quiz.category}</span>
                                <span className="quiz-card__duration">
                                    <svg className="quiz-card__duration-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {quiz.time}
                                </span>
                            </div>
                            
                            <h3 className="quiz-card__title">{quiz.title}</h3>
                            
                            <footer className="quiz-card__footer">
                                <time className="quiz-card__date">
                                    <svg className="quiz-card__date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {quiz.date}
                                </time>
                                <a 
                                    href={`/quiz/${quiz.id}`} 
                                    className="quiz-card__action"
                                    aria-label={`Start ${quiz.title} quiz`}
                                >
                                    Begin Quiz
                                    <svg className="quiz-card__action-icon" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
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



const CandidateDashboard = () => {
    return (
        <>

            <UpperPart />
            <QuizCatagory />
            <LatestQuiz />
            <OptionalCard />


        </>
    );
};

export default CandidateDashboard;