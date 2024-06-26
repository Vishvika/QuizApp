import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizDone from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuesIndex = userAnswers.length;
  const quizCompleted = activeQuesIndex === QUESTIONS.length;

  const handleSelect = useCallback(function handleSelect(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAns = useCallback(() => handleSelect(null), [handleSelect]);

  if (quizCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  if (
    userAnswers[activeQuesIndex - 1] === QUESTIONS[activeQuesIndex].answers[0]
  ) {
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuesIndex}
        index={activeQuesIndex}
        onSelectAns={handleSelect}
        onSkipAns={handleSkipAns}
      />
    </div>
  );
}
