import React from 'react';
import './CandidateDashboard.css';

const UpperPart = () => {
    return (
        <>
            <div className="upper-part">
                <h1>Your Quiz Adventure</h1>
                <h2>Starts Here: <br /> Play, Share, Earn!</h2>
                <p>Build engaging quizzes, challenge others, and earn rewards <br />for your knowledge</p>
                <div className="buttons">
                    <button className="create-btn">Create Quiz</button>
                    <button className="join-btn">Join Contest</button>
                </div>
            </div>
        </>
    )
}

const QuizCatagory = () => {
    return (
        <div className="categories">
            <h3>Quiz Categories</h3>
            {/* Add category cards or list here */}
        </div>
    )
}

const CandidateDashboard = () => {
    return (
        <>
            <UpperPart></UpperPart>
            <QuizCatagory></QuizCatagory>
        </>
    );
};

export default CandidateDashboard;