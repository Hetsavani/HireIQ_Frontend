import React, { useState } from "react";
import "./QuizQuestion.css";

// ✅ Quiz Data (Mock)
const quizData = [
    {
        question: "Which ancient wonder of the world was located in Alexandria, Egypt?",
        options: [
            { letter: "A", text: "The Colossus of Rhodes" },
            { letter: "B", text: "The Lighthouse of Alexandria" },
            { letter: "C", text: "The Hanging Gardens of Babylon" },
            { letter: "D", text: "The Temple of Artemis" }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { letter: "A", text: "Venus" },
            { letter: "B", text: "Mars" },
            { letter: "C", text: "Jupiter" },
            { letter: "D", text: "Saturn" }
        ]
    },
    {
        question: "What is the capital of France?",
        options: [
            { letter: "A", text: "Berlin" },
            { letter: "B", text: "Rome" },
            { letter: "C", text: "Paris" },
            { letter: "D", text: "London" }
        ]
    }
];

// ✅ QuizQuestion Component
const QuizQuestion = ({ questionData, onOptionClick }) => {
    const { question, options } = questionData;

    return (
        <div className="quizQue-container">
            <div className="question-text">{question}</div>
            <div className="options-container">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="option-item"
                        onClick={() => onOptionClick(option)}
                    >
                        <div className="option-letter">{option.letter}</div>
                        <div className="option-text">{option.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ✅ Main App
const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleOptionClick = (option) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentIndex] = option.letter;
        setAnswers(updatedAnswers);

        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < quizData.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div>
            <QuizQuestion
                questionData={quizData[currentIndex]}
                onOptionClick={handleOptionClick}
            />

            <div className="nav-buttons">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="btn btn-prev"
                >
                    Previous
                </button>

                <span className="question-count">
                    Question {currentIndex + 1} of {quizData.length}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === quizData.length - 1}
                    className="btn btn-next"
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default App;
