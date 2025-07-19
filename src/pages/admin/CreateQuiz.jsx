// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './CreateQuiz.css';

// const CreateQuiz = () => {
//   const [quizTitle, setQuizTitle] = useState('Untitled Quiz');
//   const [description, setDescription] = useState('Quiz description');
//   const [difficulty, setDifficulty] = useState('Medium');
//   const [tags, setTags] = useState(['']);

//   const handleTagChange = (index, value) => {
//     const newTags = [...tags];
//     newTags[index] = value;
//     setTags(newTags);
//   };

//   const addTag = () => {
//     setTags([...tags, '']);
//   };

//   return (
//     <div className="create-quiz-container">
//       <div className="tab-nav">
//         <button className="tab active">Quiz Details</button>
//         <button className="tab">Questions</button>
//         <button className="tab">Settings</button>
//       </div>
//       <div className="quiz-form">
//         <h2 className="form-title">Quiz Information</h2>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label className="form-label">Quiz Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={quizTitle}
//                 onChange={(e) => setQuizTitle(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label className="form-label">Difficulty Level</label>
//               <select
//                 className="form-control"
//                 value={difficulty}
//                 onChange={(e) => setDifficulty(e.target.value)}
//               >
//                 <option>Easy</option>
//                 <option>Medium</option>
//                 <option>Hard</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label className="form-label">Tags</label>
//               {tags.map((tag, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   className="form-control mb-2"
//                   value={tag}
//                   onChange={(e) => handleTagChange(index, e.target.value)}
//                 />
//               ))}
//               <button className="btn btn-add" onClick={addTag}>Add Tag</button>
//             </div>
//           </div>
//         </div>
//         <div className="form-actions">
//           <button className="btn btn-secondary">New Quiz</button>
//           <button className="btn btn-secondary">Preview</button>
//           <button className="btn btn-danger">Delete Quiz</button>
//           <button className="btn btn-secondary">Save Draft</button>
//           <button className="btn btn-primary">Publish Quiz</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateQuiz;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateQuiz.css';
import Questions from './Questions';
import Settings from './Settings';

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('Untitled Quiz');
  const [description, setDescription] = useState('Quiz description');
  const [difficulty, setDifficulty] = useState('Medium');
  const [tags, setTags] = useState(['']);
  const [activeTab, setActiveTab] = useState('Quiz Details');

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const addTag = () => {
    setTags([...tags, '']);
  };

  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case 'Quiz Details':
  //       return (
  //         <div className="rankings-table">
  //           <h2 className="form-title">Quiz Information</h2>
  //           <div className="row">
  //             <div className="col-md-6">
  //               <div className="form-group">
  //                 <label className="form-label">Quiz Title</label>
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   value={quizTitle}
  //                   onChange={(e) => setQuizTitle(e.target.value)}
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label className="form-label">Description</label>
  //                 <textarea
  //                   className="form-control"
  //                   value={description}
  //                   onChange={(e) => setDescription(e.target.value)}
  //                 />
  //               </div>
  //             </div>
  //             <div className="col-md-6">
  //               <div className="form-group">
  //                 <label className="form-label">Difficulty Level</label>
  //                 <select
  //                   className="form-control"
  //                   value={difficulty}
  //                   onChange={(e) => setDifficulty(e.target.value)}
  //                 >
  //                   <option>Easy</option>
  //                   <option>Medium</option>
  //                   <option>Hard</option>
  //                 </select>
  //               </div>
  //               <div className="form-group">
  //                 <label className="form-label">Tags</label>
  //                 {tags.map((tag, index) => (
  //                   <input
  //                     key={index}
  //                     type="text"
  //                     className="form-control mb-2"
  //                     value={tag}
  //                     onChange={(e) => handleTagChange(index, e.target.value)}
  //                   />
  //                 ))}
  //                 <button className="btn btn-add" onClick={addTag}>Add Tag</button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="form-actions">
  //             <button className="btn btn-secondary">New Quiz</button>
  //             <button className="btn btn-secondary">Preview</button>
  //             <button className="btn btn-danger">Delete Quiz</button>
  //             <button className="btn btn-secondary">Save Draft</button>
  //             <button className="btn btn-primary">Publish Quiz</button>
  //           </div>
  //         </div>
  //       );
  //     case 'Questions':
  //       return <Questions />;
  //     case 'Settings':
  //       return <Settings />;
  //     default:
  //       return null;
  //   }
  // };

  const renderTabContent = () => {
  switch (activeTab) {
    case 'Quiz Details':
      return (
        <div className="p-4 rounded shadow" style={{ backgroundColor: '#0F172A', color: '#F8FAFC' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#6366F1' }}>Quiz Information</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Quiz Title</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Description</label>
                <textarea
                  className="form-control"
                  style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Difficulty Level</label>
                <select
                  className="form-select"
                  style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#94A3B8' }}>Tags</label>
                {tags.map((tag, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-control mb-2"
                    style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: '1px solid #334155' }}
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                  />
                ))}
                <button className="btn btn-outline-primary mt-1" style={{ borderColor: '#6366F1', color: '#6366F1' }} onClick={addTag}>
                  Add Tag
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-4">
            <button className="btn btn-secondary">New Quiz</button>
            <button className="btn btn-secondary">Preview</button>
            <button className="btn btn-danger">Delete Quiz</button>
            <button className="btn btn-outline-light">Save Draft</button>
            <button className="btn" style={{ backgroundColor: '#6366F1', color: '#fff' }}>
              Publish Quiz
            </button>
          </div>
        </div>
      );
    case 'Questions':
      return <Questions />;
    case 'Settings':
      return <Settings />;
    default:
      return null;
  }
};

  return (
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#020817', color: '#F8FAFC' }}>

    <div className="create-quiz-container">
      <div className="tab-nav">
        <button
          className={`tab ${activeTab === 'Quiz Details' ? 'active' : ''}`}
          onClick={() => setActiveTab('Quiz Details')}
        >
          Quiz Details
        </button>
        <button
          className={`tab ${activeTab === 'Questions' ? 'active' : ''}`}
          onClick={() => setActiveTab('Questions')}
        >
          Questions
        </button>
        <button
          className={`tab ${activeTab === 'Settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('Settings')}
        >
          Settings
        </button>
      </div>
      {renderTabContent()}
    </div>
    </div>
  );
};

export default CreateQuiz;