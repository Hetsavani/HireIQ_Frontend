// import React from 'react';
// import './CreateQuiz.css';

// const Settings = () => {
//   return (
//     <div className="quiz-form">
//       <h2 className="form-title">Quiz Settings</h2>
//       <div className="form-group">
//         <label className="form-label">Time Limit (minutes)</label>
//         <select className="form-control">
//           <option>No time limit</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label className="form-label">Time Per Question (seconds)</label>
//         <select className="form-control">
//           <option>No limit per question</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label className="form-label">Randomize Questions</label>
//         <input type="checkbox" className="form-control" style={{ width: 'auto' }} />
//       </div>
//       <div className="form-group">
//         <label className="form-label">Show Explanations After Answering</label>
//         <input type="checkbox" className="form-control" style={{ width: 'auto' }} />
//       </div>
//       <div className="form-group">
//         <label className="form-label">Allow Retakes</label>
//         <input type="checkbox" className="form-control" style={{ width: 'auto' }} checked />
//       </div>
//       <div className="form-group">
//         <label className="form-label">Passing Score: 70%</label>
//         <input type="range" className="form-control" style={{ width: '100%' }} />
//       </div>
//       <div className="form-group">
//         <label className="form-label">Quiz Visibility</label>
//         <select className="form-control">
//           <option>Private (Only you can see)</option>
//         </select>
//       </div>
//       <div className="form-actions">
//         <button className="btn btn-secondary">New Quiz</button>
//         <button className="btn btn-secondary">Preview</button>
//         <button className="btn btn-danger">Delete Quiz</button>
//         <button className="btn btn-secondary">Save Draft</button>
//         <button className="btn btn-primary">Publish Quiz</button>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import React from 'react';
import './CreateQuiz.css';

const Settings = () => {
  return (
    <div className="rankings-table">
      <h2 className="form-title">Quiz Settings</h2>
      <div className="form-group">
        <label className="form-label">Time Limit (minutes)</label>
        <select className="form-control">
          <option>No time limit</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Time Per Question (seconds)</label>
        <select className="form-control">
          <option>No limit per question</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Randomize Questions</label>
        <input type="checkbox" className="form-control" style={{ width: 'auto' }} />
      </div>
      <div className="form-group">
        <label className="form-label">Show Explanations After Answering</label>
        <input type="checkbox" className="form-control" style={{ width: 'auto' }} />
      </div>
      <div className="form-group">
        <label className="form-label">Allow Retakes</label>
        <input type="checkbox" className="form-control" style={{ width: 'auto' }} checked />
      </div>
      <div className="form-group">
        <label className="form-label">Passing Score</label>
        <input type="range" className="form-control" defaultValue="70" min="0" max="100" /> 70%
      </div>
      <div className="form-group">
        <label className="form-label">Quiz Visibility</label>
        <select className="form-control">
          <option>Private (Only you can see)</option>
        </select>
      </div>
      <div className="form-actions">
        <button className="btn btn-secondary">New Quiz</button>
        <button className="btn btn-secondary">Preview</button>
        <button className="btn btn-danger">Delete Quiz</button>
        <button className="btn btn-secondary">Save Draft</button>
        <button className="btn btn-primary">Publish Quiz</button>
      </div>
    </div>
  );
};

export default Settings;