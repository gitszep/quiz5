import React, { useState } from 'react';
import questions from './questions';
import derekImage from './derek.jpg'; // Importujemy obraz

import './Quiz.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore === 10) {
        setShowCongratulations(true);
        setGameOver(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setGameOver(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setShowCongratulations(false);
  };

  if (currentQuestionIndex >= questions.length) {
    return null; // Zabezpieczenie przed przekroczeniem zakresu tablicy
  }

  return (
    <div className="quiz-container">
      {gameOver ? (
        <div className="game-over">
          {showCongratulations ? (
            <img src={derekImage} alt="Derek" /> 
          ) : (
            <h2>Niestety nie udało Ci się uratować Derka przed aborcją. Spróbuj ponownie!</h2>
          )}
          <button onClick={resetQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Pytanie {currentQuestionIndex + 1}</h2>
          <h3>{questions[currentQuestionIndex].questionText}</h3>
          <div className="answer-section">
            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
