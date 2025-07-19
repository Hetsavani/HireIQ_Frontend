import React, { useState, useEffect } from 'react';
import './ViewSubmission.css';

// Mock data to simulate backend response (to be replaced with API call)
const mockData = [
  { name: 'Alex Johnson', country: 'United States', streak: '6 streak', score: '9,850', level: '7.8' },
  { name: 'Sarah Williams', country: 'Canada', streak: '8 streak', score: '8,720', level: '2.65' },
  { name: 'Michael Brown', country: 'United Kingdom', streak: '8 streak', score: '7,640', level: '2.59' },
  { name: 'Emily Davis', country: 'Australia', streak: '4 streak', score: '6,980', level: '2.52' },
  { name: 'David Wilson', country: 'Germany', streak: '3 streak', score: '6,540', level: '2.46' },
  { name: 'Jessica Taylor', country: 'France', streak: '5 streak', score: '5,920', level: '2.45' },
  { name: 'Ryan Martinez', country: 'Spain', streak: '', score: '5,480', level: '2.41' },
  { name: 'Olivia Anderson', country: 'Italy', streak: '', score: '5,120', level: '2.38' },
];

const ViewSubmission = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data (replace with actual API call)
    const fetchRankings = async () => {
      try {
        // Example API call (uncomment and configure when backend is ready)
        /*
        const response = await fetch('/api/rankings');
        if (!response.ok) {
          throw new Error('Failed to fetch rankings');
        }
        const data = await response.json();
        setRankings(data);
        */
        setRankings(mockData); // Using mock data for now
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  if (loading) {
    return (
      <div className="view-submission">
        <h1>Rankings</h1>
        <div className="loading-message">Loading rankings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="view-submission">
        <h1>Rankings</h1>
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#020817', color: '#F8FAFC' }}>
    <div className="view-submission">
      <h1>Rankings</h1>
      <div className="rankings-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Country</th>
              <th>Streak</th>
              <th>Score</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.country}</td>
                <td>{user.streak && <span className="streak">{user.streak}</span>}</td>
                <td>{user.score}</td>
                <td>{user.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ViewSubmission;






// import React, { useState, useEffect } from 'react';
// import './ViewSubmission.css';

// const mockData = [
//   { name: 'Alex Johnson', country: 'United States', streak: '6 streak', score: '9,850', level: '7.8' },
//   { name: 'Sarah Williams', country: 'Canada', streak: '8 streak', score: '8,720', level: '2.65' },
//   { name: 'Michael Brown', country: 'United Kingdom', streak: '8 streak', score: '7,640', level: '2.59' },
//   { name: 'Emily Davis', country: 'Australia', streak: '4 streak', score: '6,980', level: '2.52' },
//   { name: 'David Wilson', country: 'Germany', streak: '3 streak', score: '6,540', level: '2.46' },
//   { name: 'Jessica Taylor', country: 'France', streak: '5 streak', score: '5,920', level: '2.45' },
//   { name: 'Ryan Martinez', country: 'Spain', streak: '', score: '5,480', level: '2.41' },
//   { name: 'Olivia Anderson', country: 'Italy', streak: '', score: '5,120', level: '2.38' },
// ];

// const ViewSubmission = () => {
//   const [rankings, setRankings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setRankings(mockData);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div className="text-center text-secondary p-5">Loading rankings...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-danger p-5">Error: {error}</div>;
//   }

//   return (
//     <div className="min-vh-100 p-4" style={{ backgroundColor: '#020817', color: '#F8FAFC' }}>
//       <div className="container bg-dark rounded p-4" style={{ backgroundColor: '#0F172A' }}>
//         <h1 className="text-center mb-4" style={{ color: '#6366F1' }}>Rankings</h1>
//         <div className="table-responsive">
//           <table className="table table-dark table-hover table-bordered align-middle" style={{ backgroundColor: '#1E293B' }}>
//             <thead style={{ backgroundColor: '#0F172A', color: '#94A3B8' }}>
//               <tr>
//                 <th>User</th>
//                 <th>Country</th>
//                 <th>Streak</th>
//                 <th>Score</th>
//                 <th>Level</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rankings.map((user, index) => (
//                 <tr key={index} style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}>
//                   <td>
//                     {index === 0 && '🥇 '}
//                     {index === 1 && '🥈 '}
//                     {index === 2 && '🥉 '}
//                     {user.name}
//                   </td>
//                   <td>{user.country}</td>
//                   <td>
//                     {user.streak && (
//                       <span className="badge rounded-pill text-bg-primary" style={{ backgroundColor: '#6366F1' }}>
//                         {user.streak}
//                       </span>
//                     )}
//                   </td>
//                   <td>{user.score}</td>
//                   <td>{user.level}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewSubmission;
