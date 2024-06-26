import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((answer) => answer === null);
  const correctAns = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnsShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );
  const correctAnsShare = Math.round(
    (correctAns.length / userAnswers.length) * 100
  );
  const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question"> {QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
