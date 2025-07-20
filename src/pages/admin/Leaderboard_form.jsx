import React from 'react'
import ViewSubmission from './ViewSubmissions';
import { useState } from 'react';

export default function Leaderboard_form() {
    const [flag, setFlag] = useState(false);
    const [quizId, setQuizId] = useState('');
    const handleClick = () => {
        setFlag(true);
        console.log(flag);
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
                <input className='quiz-input me-3' placeholder='Enter Quiz id' onChange={(e) => setQuizId(e.target.value)} />
                <button
                    className='quiz-tab active'
                    style={{ borderRadius: "10px" }}
                    disabled={!quizId.trim()}
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>
            {flag && <ViewSubmission quizId={quizId} />}
            {!flag && <div style={{ height: "72.2vh", display: "flex", justifyContent: "center", alignItems: "center" }}>  <h1>Enter Quiz id</h1></div>}
        </>
    )
}

