import React, { useState, useEffect } from "react";
import { getQuizQuestions } from "../services/api";

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuizQuestions();
      if (response.error) {
        setQuestions([]);
        setError(response.error);
        return;
      }
      setQuestions(response);
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === selectedAnswers[index]) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Quiz Page</h1>
      <div className="mt-4">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl">{question.question}</h2>
            <ul>
              {question.options.map((option: any, idx: number) => (
                <li key={idx}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      onChange={() => handleOptionChange(index, option)}
                      checked={selectedAnswers[index] === option}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {questions.length > 0 && (
        <button
          onClick={calculateScore}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit Quiz
        </button>
      )}
      {error && <span className="text-2xl text-red-500">{error}</span>}
      {score !== null && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">
            Your Score: {score}/{questions.length}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
