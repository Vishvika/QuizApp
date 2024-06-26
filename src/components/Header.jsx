import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="" />
      <h2>React Quiz</h2>
    </header>
  );
}
