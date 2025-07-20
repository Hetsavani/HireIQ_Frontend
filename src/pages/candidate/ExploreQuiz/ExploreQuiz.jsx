import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './ExploreQuize.css';

const ExploreQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/quiz/quizzes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setQuizzes(res.data || []);
            } catch (err) {
                console.error("Failed to fetch quizzes:", err);
                setError("Failed to load quizzes.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    if (loading) {
        return <div className="loading_EQ">Loading quizzes...</div>;
    }

    if (error) {
        return <div className="error_EQ">Error: {error}</div>;
    }

    return (
        <div className="explore-quizzes_EQ">
            <h2 className="section-title_EQ">Explore Quizzes</h2>
            <div className="quiz-grid_EQ">
                {quizzes.map((quiz, index) => (
                    <div key={index} className="quiz-card_EQ">
                        <div className="quiz-image-container_EQ">
                            <img src={quiz.image} alt={quiz.title} className="quiz-image_EQ" />
                            <div className="quiz-badges_EQ">
                                {quiz.isHot && <span className="badge_EQ hot_EQ">Hot</span>}
                                {quiz.isEditorsChoice && <span className="badge_EQ editors-choice_EQ">Editor's Choice</span>}
                                {quiz.isTrending && <span className="badge_EQ trending_EQ">Trending</span>}
                                {quiz.isTopRated && <span className="badge_EQ top-rated_EQ">Top Rated</span>}
                            </div>
                        </div>

                        <div className="quiz-content_EQ">
                            <h3 className="quiz-title_EQ">{quiz.title}</h3>

                            <div className="host-info_EQ">
                                <span className="host-label_EQ">Host:</span>
                                <span className="host-name_EQ">{quiz.createdBy?.name}</span>
                            </div>

                            <div className="host-info_EQ">
                                <span className="host-label_EQ">Topic:</span>
                                <span className="host-name_EQ">{quiz.topic}</span>
                            </div>
                            <div className="host-info_EQ">
                                <span className="host-label_EQ">Created:</span>
                                <span className="host-name_EQ">{new Date(quiz.createdAt).toLocaleDateString()}</span>
                            </div>

                            <p className="quiz-description_EQ">{quiz.description}</p>

                            <div className="difficulty-level_EQ">
                                <span className="difficulty-label_EQ">Difficulty:</span>
                                <span className="difficulty-value_EQ">{quiz.difficulty}</span>
                            </div>

                            <NavLink className="play-button_EQ" to={`QuizById/${quiz.quizId}`}>
                                Play Now
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreQuiz;