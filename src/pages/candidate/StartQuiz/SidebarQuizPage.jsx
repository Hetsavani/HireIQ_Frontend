import React from 'react';

const questions = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  status: 'pending', // can be 'answered', 'skipped', 'pending'
}));

const SidebarQuizPage = () => {
  return (
    <div style={{ width: '200px', background: '#0F172A', color: '#F8FAFC', padding: '10px' }}>
      <h5>Questions</h5>
      {questions.map(q => (
        <div key={q.id} style={{
          padding: '5px',
          margin: '5px 0',
          background: q.status === 'answered' ? '#22c55e' : q.status === 'skipped' ? '#facc15' : '#94A3B8',
          borderRadius: '5px',
          textAlign: 'center',
        }}>
          Q{q.id}
        </div>
      ))}
    </div>
  );
};

export default SidebarQuizPage;
