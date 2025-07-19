import React, { useState } from 'react';

const QuestionBox = () => {
  const [selected, setSelected] = useState(null);

  const question = {
    text: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid']
  };

  return (
    <div>
      <h4>{question.text}</h4>
      <div>
        {question.options.map((opt, index) => (
          <div key={index} onClick={() => setSelected(index)} style={{
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            backgroundColor: selected === index ? '#6366F1' : '#1E293B',
            color: '#F8FAFC',
            cursor: 'pointer'
          }}>
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
