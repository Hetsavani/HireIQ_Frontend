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


const CandidateDashboard = () => {
    return (
        <>

            <UpperPart />
            <QuizCatagory />
            <LatestQuiz />

        </>
    );
};

export default CandidateDashboard;