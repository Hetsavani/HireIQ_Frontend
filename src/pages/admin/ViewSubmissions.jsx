import React, { useState, useEffect } from 'react';
import { Crown, Star, Download, Mail } from 'lucide-react';
import './ViewSubmission.css';

const Leader_VS = ({ users }) => {
  const defaultUsers = [
    {
      id: 1,
      name: "Sarah Williams",
      points: "8,720 pts",
      tier: "Platinum",
      rating: 65,
      position: 2,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "sarah.williams@example.com",
      about: "Full-stack developer with 5 years of experience in React and Node.js",
      resume: "https://example.com/resumes/sarah_williams.pdf"
    },
    {
      id: 2,
      name: "Alex Johnson",
      points: "9,850 pts",
      tier: "Diamond",
      rating: 78,
      position: 1,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "alex.johnson@example.com",
      about: "Senior UX Designer specializing in accessibility and user research",
      resume: "https://example.com/resumes/alex_johnson.pdf"
    },
    {
      id: 3,
      name: "Michael Brown",
      points: "7,640 pts",
      tier: "Gold",
      rating: 59,
      position: 3,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      email: "michael.brown@example.com",
      about: "Data scientist with expertise in machine learning and Python",
      resume: "https://example.com/resumes/michael_brown.pdf"
    }
  ];

  const userData = users || defaultUsers;

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
          {userData.map((user) => (
            <div
              key={user.id}
              className={`user_card_VS ${user.position === 1 ? 'winner_VS' : ''}`}
            >
              {user.position === 1 && (
                <div className="crown_container_VS">
                  <Crown className="crown_icon_VS" />
                </div>
              )}

              <div
                className="profile_image_VS"
                style={{ borderColor: getBorderColor_VS(user.position) }}
              >
                <img src={user.image} alt={user.name} />
                {user.position <= 3 && (
                  <div className="position_badge_VS">
                    {user.position}
                  </div>
                )}
              </div>

              <h3 className="user_name_VS">{user.name}</h3>
              <p className="user_points_VS">{user.points}</p>

              <div className="user_stats_VS">
                <div
                  className="tier_badge_VS"
                  style={{ backgroundColor: getTierColor_VS(user.tier) }}
                >
                  {user.tier}
                </div>

                <div className="rating_VS">
                  <Star className="star_icon_VS" />
                  <span>{user.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ViewSubmission = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const mockData = [
      { 
        name: 'Alex Johnson', 
        country: 'United States', 
        streak: '6 streak', 
        score: '9,850', 
        level: '7.8',
        email: 'alex.johnson@example.com',
        about: 'Senior UX Designer specializing in accessibility and user research',
        resume: 'https://example.com/resumes/alex_johnson.pdf',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      { 
        name: 'Sarah Williams', 
        country: 'Canada', 
        streak: '8 streak', 
        score: '8,720', 
        level: '2.65',
        email: 'sarah.williams@example.com',
        about: 'Full-stack developer with 5 years of experience in React and Node.js',
        resume: 'https://example.com/resumes/sarah_williams.pdf',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      { 
        name: 'Michael Brown', 
        country: 'United Kingdom', 
        streak: '8 streak', 
        score: '7,640', 
        level: '2.59',
        email: 'michael.brown@example.com',
        about: 'Data scientist with expertise in machine learning and Python',
        resume: 'https://example.com/resumes/michael_brown.pdf',
        photo: 'https://randomuser.me/api/portraits/men/75.jpg'
      }
    ];

    setRankings(mockData);
    setLoading(false);
  }, []);

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
      <Leader_VS />
      <div className="rankings_table_VS">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Country</th>
              <th>Streak</th>
              <th>Score</th>
              <th>Level</th>
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
                <td>{user.country}</td>
                <td>{user.streak && <span className="streak_VS">{user.streak}</span>}</td>
                <td>{user.score}</td>
                <td>{user.level}</td>
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