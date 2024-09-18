import { useNavigate } from "react-router-dom";
import FooterPage from "../Components/FooterPage";
import { useState } from "react";
import QuizQues from "./QuizQues";
import Scoreboard from "./Scoreboard";

export default function Quiz1() {
  const questionsData = [
    {
      question: "Who made Princess Happy?",
      options: ["King", "courtiers", "Saint", "Ministers"],
      correctAnswer: "Saint",
    },
    {
      question: "When is National Space Day Celebrated?",
      options: ["23 Aug", "18 Sept", "14 Feb", "31 Dec"],
      correctAnswer: "23 Aug",
    },
    {
      question: "Where is the Space Science Museum located?",
      options: ["Bangolore", "Sriharikota", "Delhi", "Hyderabad"],
      correctAnswer: "Hyderabad",
    },
    {
      question: "How many satellites did India send in a single day?",
      options: ["225", "180", "104", "140"],
      correctAnswer: "104",
    },
    {
      question: "What is the full form of ISRO?",
      options: [
        "Indian Space Research & Development Center Organisation",
        "Indian Space Research Organisation",
        "India Satellite Research Organisation",
        "Indian Satellite Research Organisation",
      ],
      correctAnswer: "Indian Space Research Organisation",
    },
    {
      question: "Who is the Father of the Indian Space Programme?",
      options: ["Dr. Vikram Sarabhai", "DR. A.P.J.Abdul Kalam", "Aryabhatt", "Pragyaan"],
      correctAnswer: "Dr. Vikram Sarabhai"
    },
    {
      question: "Where did Chandrayaan 3 landed succesfully?",
      options: ["Tiranga Point", "Shiv Shakthi Point", "Veer Point", "No Point"],
      correctAnswer: "Shiv Shakthi Point",
    },
  ];

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelection = (selectedAnswer, correctAnswer, question) => {
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      { question, selectedAnswer, correctAnswer },
    ]);

    setStep((prev) => prev + 1);
  };

  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate("/");
  };

  const prevPageHandler = () => {
    navigate("/books/page3/");
  };

  const nextPageHandler = () => {
    navigate("/quiz/quiz1/");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 select-none">
        {step < questionsData.length ? (
          <QuizQues
            question={questionsData[step].question}
            options={questionsData[step].options}
            correctAnswer={questionsData[step].correctAnswer}
            onAnswerSelect={handleAnswerSelection}
          />
        ) : (
          <Scoreboard score={score} answers={answers} />
        )}
      </div>
      <FooterPage
        pageNum1={`01`}
        pageNum2={`02`}
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
