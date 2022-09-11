import { useState } from "react";
import { useGlobalContext } from "./context";
const QuizGame = () => {
  const {
    activeQuestion,
    setActiveQuestion,
    trueAnswers,
    numOfTrueAnswers,
    setNumOfTrueAnswers,
    deepInfo,
  } = useGlobalContext();
  const [answerIs, setAnswerIs] = useState(null);

  const handleClick = () => {
    if (answerIs === null) {
      alert("Choose One");
    } else {
      if (answerIs === trueAnswers) {
        setNumOfTrueAnswers(numOfTrueAnswers + 1);
      }
      setActiveQuestion(activeQuestion + 1);
    }
  };

  if (Object.keys(deepInfo).length) {
    return (
      <div className="list">
        <h3>{deepInfo.ques}</h3>
        <ul>
          {deepInfo.answersArray.map((el, idx) => (
            <li
              key={idx}
              onClick={() => setAnswerIs(el)}
              style={el === answerIs ? { border: "1px solid black" } : null}
            >
              {el}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Next Question</button>
      </div>
    );
  }
};

export default QuizGame;
