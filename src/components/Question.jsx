import QuesTimer from "./QuesTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({ index, onSelectAns, onSkipAns }) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAns(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAns(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="question">
      <QuesTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAns : null}
        mode={answerState}
      />

      <h2> {QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAns={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAns}
      />
    </div>
  );
}
