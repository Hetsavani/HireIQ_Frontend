
import React, { useEffect, useRef, useState } from 'react';

const StartQuiz = ({ onStart }) => {
  const videoRef = useRef(null);
  const [name, setName] = useState('');

  // Trigger full-screen and camera access on mount
  useEffect(() => {
    // Fullscreen
    const goFullScreen = async () => {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    };
    goFullScreen();

    // Camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Camera access denied:', err);
      }
    };
    startCamera();
  }, []);

  const handleStart = () => {
    onStart(name);
  };

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: '#020817', color: '#F8FAFC' }}
    >
      {/* Camera Preview */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="mb-4 rounded"
        style={{ width: '200px', height: '150px', objectFit: 'cover', backgroundColor: '#1E293B' }}
      />

      {/* Quiz Start Box */}
      <div className="text-center p-4 rounded shadow" style={{ backgroundColor: '#0F172A', width: '100%', maxWidth: '500px' }}>
        <h2 className="mb-3">Welcome to the Quiz</h2>
        <p className="text-secondary">Enter your name and click start to begin!</p>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your name (optional)"
          style={{ backgroundColor: '#1E293B', color: '#F8FAFC', border: 'none' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn w-100 fw-bold"
          style={{ backgroundColor: '#6366F1', color: '#fff' }}
          onClick={handleStart}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartQuiz;
