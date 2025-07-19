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

const Settings = () => {
  return (
    <div className="p-4 rounded shadow" style={{ backgroundColor: '#0F172A', color: '#F8FAFC' }}>
      <h2 className="mb-4">Quiz Settings</h2>

      <div className="mb-3">
        <label className="form-label" style={{ color: '#94A3B8' }}>Time Limit (minutes)</label>
        <select className="form-select" style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}>
          <option>No time limit</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" style={{ color: '#94A3B8' }}>Time Per Question (seconds)</label>
        <select className="form-select" style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}>
          <option>No limit per question</option>
        </select>
      </div>

      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" id="randomizeQuestions" />
        <label className="form-check-label" htmlFor="randomizeQuestions" style={{ color: '#94A3B8' }}>
          Randomize Questions
        </label>
      </div>

      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" id="showExplanations" />
        <label className="form-check-label" htmlFor="showExplanations" style={{ color: '#94A3B8' }}>
          Show Explanations After Answering
        </label>
      </div>

      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" id="allowRetakes" defaultChecked />
        <label className="form-check-label" htmlFor="allowRetakes" style={{ color: '#94A3B8' }}>
          Allow Retakes
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label" style={{ color: '#94A3B8' }}>Passing Score</label>
        <input type="range" className="form-range" defaultValue="70" min="0" max="100" />
        <span style={{ color: '#94A3B8' }}>70%</span>
      </div>

      <div className="mb-4">
        <label className="form-label" style={{ color: '#94A3B8' }}>Quiz Visibility</label>
        <select className="form-select" style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}>
          <option>Private (Only you can see)</option>
        </select>
      </div>

      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-outline-light">New Quiz</button>
        <button className="btn btn-outline-light">Preview</button>
        <button className="btn btn-outline-danger">Delete Quiz</button>
        <button className="btn btn-outline-light">Save Draft</button>
        <button className="btn btn-primary" style={{ backgroundColor: '#6366F1', border: 'none' }}>
          Publish Quiz
        </button>
      </div>
    </div>
  );
};

export default Settings;
