import React, { useEffect, useState } from 'react';
import './AllQuiz.css';
import { Line } from 'recharts';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AllQuiz = () => {

  const [quizzes, setQuizzes] = useState([]);

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
                // setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

  // const quizzes = [
  //   { title: "Science Quiz: Space Exploration", image: '/src/assets/img/quizCategory/code.jpeg', category: "Entertainment", host: "Alex Smith", rating: 4.9, reward: 10.00, players: "2.5k", joined: 82, spots: "547", daysLeft: "2", isHot: true },
  //   { title: "World Geography Challenge", image: "/src/assets/img/quizCategory/code.jpeg", category: "Geography", host: "Alex Smith", rating: 4.8, reward: 7.50, players: "1.9k", joined: 94, spots: "128", isEditorsChoice: true },
  //   { title: "Brain Teasers & Logic Puzzles", image: "/src/assets/img/quizCategory/code.jpeg", category: "Puzzles", host: "Alex Smith", rating: 4.7, reward: 8.00, players: "3.2k", joined: 65, spots: "1759", daysLeft: "24h", isTrending: true },
  //   { title: "History's Greatest Mysteries", image: "/src/assets/img/quizCategory/google.jpeg", category: "History", host: "Alex Smith", rating: 4.9, reward: 6.50, players: "1.6k", joined: 98, spots: "37", isTopRated: true },
  //   { title: "Pop Culture Trivia", image: "/src/assets/img/quizCategory/google.jpeg", category: "Entertainment", host: "Jamie Lee", rating: 4.6, reward: 5.00, players: "3.8k", joined: 72, spots: "892", daysLeft: "5", isTrending: true },
  //   { title: "Math Olympiad Challenge", image: "/src/assets/img/quizCategory/code.jpeg", category: "Mathematics", host: "Dr. Alan Turing", rating: 4.9, reward: 15.00, players: "1.2k", joined: 88, spots: "215", isEditorsChoice: true },
  // ];

  return (
    <div className="explore-quizzes">
      <h2 className="section-title">Explore Quizzes</h2>
      <div className="quiz-grid1">
        {quizzes.map((quiz, index) => (
          <div key={index} className="quiz-card1">
            <div className="quiz-image-container">
              <img src={quiz.image} alt={quiz.title} className="quiz-image" />
              <div className="image-overlay">
                {/* {quiz.daysLeft && <span className="days-left">{quiz.daysLeft} days left</span>} */}
                {/* <span className="category-badge" >{quiz.category}</span> */}
              </div>
              <div className="quiz-badges">
                {quiz.isHot && <span className="badge hot">Hot</span>}
                {quiz.isEditorsChoice && <span className="badge editors-choice">Editor's Choice</span>}
                {quiz.isTrending && <span className="badge trending">Trending</span>}
                {quiz.isTopRated && <span className="badge top-rated">Top Rated</span>}
              </div>
            </div>
            
            <div className="quiz-content">
              <h3 className="quiz-title">{quiz.title}</h3>
              
              <div className="host-info">
                <span className="host-label">Host:</span>
                <span className="host-name">{quiz.createdBy?.name}</span>
              </div>
              
              {/* <div className="stats-row">
                <div className="rating">
                  <span className="star-icon">★</span>
                  <span>{quiz.rating}</span>
                </div>
                <div className="reward">
                  <span className="reward-icon">💰</span>
                  <span>${quiz.reward}</span>
                </div>
              </div> */}
              
              {/* <div className="progress-container">
                <div className="progress-info">
                  <span>{quiz.joined}% filled</span>
                  <span>{quiz.spots} spots left</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${quiz.joined}%` }}></div>
                </div>
              </div> */}
              
              <div className="players-info">
                <span>{quiz.description}</span>
              </div> 
              
              {/* <button className="play-button" >
                Play Now
                <span className="button-icon">→</span>
              </button> */}

              <NavLink className="play-button" to={`/admin/view-submissions/${quiz.quizId}`}>
                Result
              </NavLink>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;