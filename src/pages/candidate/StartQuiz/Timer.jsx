import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(900); // 15 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
      ⏱️ Time Left: {formatTime()}
    </div>
  );
};

export default Timer;
