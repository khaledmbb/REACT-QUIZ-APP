import { useEffect, Fragment } from "react";
import { useGlobalContext } from "./context";
import Info from "./Info";
import QuizGame from "./QuizGame";
import Loader from "./Loader";
import Result from "./Result";

const Quiz = () => {
  const { setStartGame, isDone, loading } = useGlobalContext();
  useEffect(() => {
    setStartGame(false);
  }, []);
  if (isDone) {
    return (
      <div className="result">
        <Result />
      </div>
    );
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="game-started">
          <Info />
          <QuizGame />
        </div>
      )}
    </Fragment>
  );
};

export default Quiz;
