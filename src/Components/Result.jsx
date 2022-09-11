import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Result = () => {
  const {
    numOfTrueAnswers,
    setNumOfTrueAnswers,
    questionsList,
    setQuestionsList,
    info,
    setIsDone,
  } = useGlobalContext();
  const handleClick = () => {
    setIsDone(false);
    setQuestionsList([]);
    setNumOfTrueAnswers(0);
  };
  return (
    <div>
      <ul>
        <li>
          <span>Category :</span> {info.category}
        </li>
        <li>
          <span>Difficulty :</span> {info.difficulty}
        </li>
        <li>
          <span>Number Of Questions :</span> {info.questionLength}
        </li>
        <li>
          <span>Your Score : </span>
          {numOfTrueAnswers}/{questionsList.length}
        </li>
      </ul>
      <button type="button" className="btn" onClick={handleClick}>
        <Link to="/">Play Again</Link>
      </button>
    </div>
  );
};

export default Result;
