import './QuizById.css';
import { ChevronLeft, Clock, Users, HelpCircle, Star, Bookmark, Share, Lock } from 'lucide-react';

const QuizById = (props) => {
  const {
    title = "Space Exploration Quiz",
    duration = "20 min",
    players = "285 players",
    questions = "25 questions",
    rating = "4.8 (158 ratings)",
    spotsLeft = "285/300",
    category = "Science & Technology",
    questionCount = "25",
    timeLimit = "20 min",
    difficulty = "Medium",
    creatorName = "MarvelFan2023",
    creatorTitle = "Expert Quiz Creator",
    quizzesMade = "42",
    lastUpdated = "2023-10-15"
  } = props;

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="back-button">
          <ChevronLeft size={20} />
          <span>Back to Explore</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="quiz-main">
        {/* Left Content */}
        <div className="quiz-left">
          {/* Hero Section */}
          <div
            className="quiz-hero"
            style={{ backgroundImage: 'url(https://csspicker.dev/api/image/?q=pyramids+ancient+sunset&image_type=photo)' }}
          >
            <div className="quiz-hero-overlay">
              <div className="quiz-tags">
                <span className="tag yellow">Trivia</span>
                <span className="tag purple">Featured</span>
                <span className="tag blue">Popular</span>
              </div>
              <h1>{title}</h1>
              <div className="quiz-meta">
                <div><Clock size={16} /><span>{duration}</span></div>
                <div><Users size={16} /><span>{players}</span></div>
                <div><HelpCircle size={16} /><span>{questions}</span></div>
                <div><Star size={16} /><span>{rating}</span></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="quiz-tabs">
            <button className="active">Overview</button>
            <button>Leaderboard</button>
            <button>Reviews</button>
          </div>

          {/* Description */}
          <div className="quiz-section">
            <h2>Description</h2>
            <p>Test your knowledge of the Space Exploration with this comprehensive trivia quiz...</p>
          </div>

          {/* Requirements */}
          <div className="quiz-section">
            <h2>Requirements</h2>
            <p>Basic knowledge of Marvel movies and TV shows. No specific preparation needed.</p>
          </div>

          {/* Tags */}
          <div className="quiz-section">
            <h2>Tags</h2>
            <div className="quiz-tags-list">
              {['Marvel', 'Superheroes', 'Movies', 'MCU', 'Avengers'].map(tag => (
                <span key={tag} className="tag dark">{tag}</span>
              ))}
            </div>
          </div>

          {/* Related Quizzes */}
          <div className="quiz-section">
            <h2>Related Quizzes</h2>
            <div className="quiz-grid">
              {[
                { title: 'DC Extended Universe Quiz', difficulty: 'Hard', image: 'superhero+dc+comics' },
                { title: 'Star Wars Saga Trivia', difficulty: 'Medium', image: 'star+wars+space' },
                { title: 'Harry Potter Wizarding World', difficulty: 'Easy', image: 'harry+potter+magic' }
              ].map((quiz, index) => (
                <div key={index} className="quiz-card">
                  <div
                    className="quiz-card-img"
                    style={{ backgroundImage: `url(https://csspicker.dev/api/image/?q=${quiz.image}&image_type=photo)` }}
                  >
                    <span className={`difficulty-tag ${quiz.difficulty.toLowerCase()}`}>{quiz.difficulty}</span>
                  </div>
                  <div className="quiz-card-body">
                    <h3>{quiz.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="quiz-sidebar">
          <div className="quiz-sidebar-box">
            <div className="sidebar-row">
              <span>Spots Filled</span>
              <span>{spotsLeft}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '95%' }}></div>
            </div>

            <div className="sidebar-meta">
              <div className="sidebar-row">
                <span>Category</span>
                <span>Questions</span>
              </div>
              <div className="sidebar-row bold">
                <span>{category}</span>
                <span>{questionCount}</span>
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
                <div className="avatar">M</div>
                <div>
                  <div className="creator-name">{creatorName}</div>
                  <div className="creator-title">{creatorTitle}</div>
                </div>
              </div>
              <div className="creator-meta">
                <span>Quizzes: {quizzesMade}</span>
                <span>Updated: {lastUpdated}</span>
              </div>
            </div>

            <button className="play-btn">Play Now</button>

            <div className="sidebar-icons">
              <Bookmark size={20} />
              <Share size={20} />
              <Lock size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizById;
