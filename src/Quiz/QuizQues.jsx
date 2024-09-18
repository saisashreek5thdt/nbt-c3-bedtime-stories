/* eslint-disable react/prop-types */
import { useState } from "react";

export default function QuizQues({
  question,
  options,
  correctAnswer,
  onAnswerSelect,
}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSelect(selectedOption, correctAnswer, question);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{question}</h2>
        {/* <ul>
          {options.map((option, index) => (
            <li key={index} className="mb-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="text-lg">{option}</span>
              </label>
            </li>
          ))}
        </ul> */}
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <p key={index} className="mb-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="text-lg">{option}</span>
              </label>
            </p>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </>
  );
}
