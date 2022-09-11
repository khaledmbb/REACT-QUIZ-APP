import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Info = () => {
  const { info, activeQuestion } = useGlobalContext();

  return (
    <div className="info-section">
      <ul>
        <li>
          <span>Number Of Question :</span> {info.questionLength}/
          {activeQuestion + 1}
        </li>
        <li>
          <span>Category :</span> {info.category}
        </li>
        <li>
          <span>Difficulty :</span> {info.difficulty}
        </li>
        <li>
          <span>Number Of Questions :</span> {info.questionLength}
        </li>
      </ul>
      <button type="button" className="btn">
        <Link to="/">Restart</Link>
      </button>
    </div>
  );
};

export default Info;
