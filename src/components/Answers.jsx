import { useRef } from "react";

export default function Answers({
  answers,
  selectedAns,
  answerState,
  onSelect,
}) {
  const shuffledAns = useRef();

  if (!shuffledAns.current) {
    shuffledAns.current = [...answers];
    shuffledAns.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="answers">
      {shuffledAns.current.map((answer) => {
        const isSelected = selectedAns === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
