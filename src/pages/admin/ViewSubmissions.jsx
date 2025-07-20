import React, { useState, useEffect } from 'react';
import { Crown, Star, Download, Mail } from 'lucide-react';
import './ViewSubmission.css';
import axios from 'axios';

const Leader_VS = ({ users }) => {
  const getTierColor_VS = (tier) => {
    switch (tier) {
      case 'Diamond': return '#6366f1';
      case 'Platinum': return '#3B82F6';
      case 'Gold': return '#EAB308';
      default: return '#64748b';
    }
  };

  const getBorderColor_VS = (position) => {
    switch (position) {
      case 1: return '#EAB308';
      case 2: return '#94A3B8';
      case 3: return '#A855F7';
      default: return '#94A3B8';
    }
  };

  return (
    <div className="leader_section_VS">
      <div className="leader_container_VS">
        <div className="leader_grid_VS">
          {users?.map((user, index) => (
            <div
              key={index}
              className={`user_card_VS ${user.rank === 1 ? 'winner_VS' : ''}`}
            >
              {user.rank === 1 && (
                <div className="crown_container_VS">
                  <Crown className="crown_icon_VS" />
                </div>
              )}

              <div
                className="profile_image_VS"
                style={{ borderColor: getBorderColor_VS(user.rank) }}
              >
                <img src={user.photo} alt={user.name} />
                {user.rank <= 3 && (
                  <div className="position_badge_VS">
                    {user.rank}
                  </div>
                )}
              </div>

              <h3 className="user_name_VS">{user.name}</h3>
              <p className="user_points_VS">{user.score} pts</p>

              <div className="user_stats_VS">
                <div
                  className="tier_badge_VS"
                  style={{ backgroundColor: getTierColor_VS(user.tier || "Gold") }}
                >
                  {user.tier || "Gold"}
                </div>

                <div className="rating_VS">
                  <Star className="star_icon_VS" />
                  <span>{user.level || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ViewSubmission = ({ quizId }) => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (!quizId) return;

    async function fetchRankings() {
      try {
        console.log("Fetching for Quiz ID:", quizId); // ✅ Confirm input is working
        // fetch(`http://localhost:3000/api/quiz/join/${quizId}`)
        const joinRes = await axios.get(`http://localhost:3000/api/quiz/join/${quizId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const quizMongoId = joinRes.data?.quiz?._id;
        console.log(joinRes.data)
        console.log("Quiz Mongo ID:", quizMongoId);

        if (!quizMongoId) {
          setError("Quiz not found");
          return;
        }

        const leaderboardRes = await axios.get(`http://localhost:3000/api/submissions/leaderboard/${quizMongoId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setRankings(leaderboardRes.data);
      } catch (err) {
        console.error("Failed to fetch rankings:", err);
        setError("Failed to fetch rankings. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchRankings();
  }, [quizId]);

  const handleNameHover = (user, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredUser(user);
    setPopupPosition({
      x: rect.left + (rect.width / 2) - 160, // Center popup horizontally
      y: rect.bottom + 10 // Position below the name cell
    });
    setPopupVisible(true);
  };

  const handlePopupLeave = () => {
    setPopupVisible(false);
  };

  if (loading) {
    return (
      <div className="leaderboard_view_VS">
        <div className="loading_message_VS">Loading rankings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leaderboard_view_VS">
        <div className="error_message_VS">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="leaderboard_view_VS">
      <Leader_VS users={rankings.slice(0, 3)} />
      <div className="rankings_table_VS">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Candidate</th>
              <th>College</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user, index) => (
              <tr key={index} className="table_row_VS">
                <td>{index + 1}</td>
                <td>
                  <div
                    className="user_cell_VS"
                    onMouseEnter={(e) => handleNameHover(user, e)}
                    onMouseLeave={() => setPopupVisible(false)}
                  >
                    <img src={user.photo} alt={user.name} className="user_avatar_VS" />
                    {user.name}
                  </div>
                </td>
                <td>{user.college}</td>
                <td>{user.score && <span className="streak_VS">{user.score}</span>}</td>
                <td>{user.percentage}</td>
                <td>{user.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hoveredUser && popupVisible && (
        <div
          className="user_popup_VS"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
            transform: 'translateX(0)' // Ensure no horizontal translation
          }}
          onMouseEnter={() => setPopupVisible(true)}
          onMouseLeave={handlePopupLeave}
        >
          <div className="popup_header_VS">
            <img src={hoveredUser.photo} alt={hoveredUser.name} className="popup_avatar_VS" />
            <h3>{hoveredUser.name}</h3>
          </div>
          <div className="popup_content_VS">
            <div className="popup_field_VS">
              <Mail className="popup_icon_VS" />
              <span>{hoveredUser.email}</span>
            </div>
            <div className="popup_field_VS">
              <p className="popup_about_VS">{hoveredUser.about}</p>
            </div>
            <a
              href={hoveredUser.resume}
              className="resume_link_VS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="popup_icon_VS" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewSubmission;