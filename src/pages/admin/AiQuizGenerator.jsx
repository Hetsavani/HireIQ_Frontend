// // import React, { useState } from 'react';
// // import './AiQuizGenerator.css';

// // const AiQuizGenerator = () => {
// //   const [formData, setFormData] = useState({
// //     topic: '',
// //     difficulty: 'medium',
// //     numberOfQuestions: 5,
// //     additionalInformation: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   };

// //   return (
// //     <div className="ai-quiz-generator-container">
// //       <h2>AI Quiz Generator</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Quiz Topic</label>
// //           <input
// //             type="text"
// //             name="topic"
// //             placeholder="e.g., World History, Space Exploration, etc."
// //             value={formData.topic}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Difficulty Level</label>
// //           <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
// //             <option value="easy">Easy</option>
// //             <option value="medium">Medium</option>
// //             <option value="hard">Hard</option>
// //           </select>
// //           <label>Number of Questions</label>
// //           <select name="numberOfQuestions" value={formData.numberOfQuestions} onChange={handleChange}>
// //             <option value="5">5 Questions</option>
// //             <option value="10">10 Questions</option>
// //             <option value="15">15 Questions</option>
// //           </select>
// //         </div>
// //         <div className="form-group">
// //           <label>Additional Information (Optional)</label>
// //           <textarea
// //             name="additionalInformation"
// //             placeholder="Any specific requirements or focus areas for the quiz"
// //             value={formData.additionalInformation}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <button type="submit">Generate Quiz</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AiQuizGenerator;


// import React, { useState } from 'react';
// import ai1 from '../../assets/img/aib1.png';
// import ai2 from '../../assets/img/aib2.png';
// import ai3 from '../../assets/img/aib3.png';
// import ai4 from '../../assets/img/aib4.png';

// const AiQuizGenerator = () => {
//   const [formData, setFormData] = useState({
//     topic: '',
//     difficulty: 'medium',
//     numberOfQuestions: 5,
//     additionalInformation: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="min-vh-100 p-4" style={{ backgroundColor: '#020817', color: '#F8FAFC' }}>
//       <div className='d-flex'>
//         <div className="container" style={{ maxWidth: '600px' }}>
//           <div className="p-4 rounded shadow" style={{ backgroundColor: '#0F172A' }}>
//             <h2 className="text-center mb-4" style={{ color: '#6366F1' }}>AI Quiz Generator</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label" style={{ color: '#F8FAFC' }}>Quiz Topic</label>
//                 <input
//                   type="text"
//                   name="topic"
//                   className="form-control"
//                   style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: 'none' }}
//                   placeholder="e.g., World History, Space Exploration, etc."
//                   value={formData.topic}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label" style={{ color: '#F8FAFC' }}>Difficulty Level</label>
//                 <select
//                   name="difficulty"
//                   className="form-select"
//                   style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: 'none' }}
//                   value={formData.difficulty}
//                   onChange={handleChange}
//                 >
//                   <option value="easy">Easy</option>
//                   <option value="medium">Medium</option>
//                   <option value="hard">Hard</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label" style={{ color: '#F8FAFC' }}>Number of Questions</label>
//                 <select
//                   name="numberOfQuestions"
//                   className="form-select"
//                   style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: 'none' }}
//                   value={formData.numberOfQuestions}
//                   onChange={handleChange}
//                 >
//                   <option value="5">5 Questions</option>
//                   <option value="10">10 Questions</option>
//                   <option value="15">15 Questions</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label" style={{ color: '#F8FAFC' }}>Additional Information (Optional)</label>
//                 <textarea
//                   name="additionalInformation"
//                   className="form-control"
//                   style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: 'none' }}
//                   rows={3}
//                   placeholder="Any specific requirements or focus areas for the quiz"
//                   value={formData.additionalInformation}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>

//               <div className="text-end">
//                 <button
//                   type="submit"
//                   className="btn"
//                   style={{ backgroundColor: '#6366F1', color: '#fff' }}
//                 >
//                   Generate Quiz
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="container py-4">
//           <div className="d-flex flex-wrap justify-content-center align-items-start">
//             <img
//               src={ai1}
//               alt="AI 1"
//               className="rounded shadow"
//               style={{ width: '200px', height: 'auto', transform: 'rotate(-2deg)' , marginTop: '150px'}}
//             />
//             <img
//               src={ai2}
//               alt="AI 2"
//               className="rounded shadow"
//               style={{ width: '230px', height: 'auto', transform: 'rotate(3deg)', marginTop: '0px' }}
//             />
//             <img
//               src={ai3}
//               alt="AI 3"
//               className="rounded shadow"
//               style={{ width: '180px', height: 'auto', transform: 'rotate(-5deg)', marginTop: '0px' }}
//             />
//             <img
//               src={ai4}
//               alt="AI 4"
//               className="rounded shadow"
//               style={{ width: '210px', height: 'auto'   , transform: 'rotate(2deg)', marginTop: '0px' }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AiQuizGenerator;


import React, { useState } from 'react';
import './AiQuizGenerator.css';

const AiQuizGenerator = () => {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    difficulty: 'medium',
    numberOfQuestions: 5,
    timeLimit: 30,
    requiredPercentage: 60,
    additionalInformation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ai-quiz-generator-container">
      <h2>AI Quiz Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quiz Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter quiz title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quiz Topic</label>
          <input
            type="text"
            name="topic"
            placeholder="e.g., World History, Space Exploration, etc."
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Difficulty Level</label>
          <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Number of Questions</label>
          <select name="numberOfQuestions" value={formData.numberOfQuestions} onChange={handleChange}>
            <option value="5">5 Questions</option>
            <option value="10">10 Questions</option>
            <option value="15">15 Questions</option>
            <option value="20">20 Questions</option>
          </select>
        </div>
        <div className="form-group">
          <label>Time Limit (minutes)</label>
          <input
            type="number"
            name="timeLimit"
            min="1"
            max="120"
            value={formData.timeLimit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Required Passing Percentage</label>
          <input
            type="number"
            name="requiredPercentage"
            min="1"
            max="100"
            value={formData.requiredPercentage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Additional Information (Optional)</label>
          <textarea
            name="additionalInformation"
            placeholder="Any specific requirements or focus areas for the quiz"
            value={formData.additionalInformation}
            onChange={handleChange}
          />
        </div>
        <button className='btnAiQuizGenerator' type="submit">Generate Quiz</button>
      </form>
    </div>
  );
};

export default AiQuizGenerator;