import { Routes, Route } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Setting from "./Components/Setting";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <span>/</span> Quiz Game <span>/</span>
        </h1>
        <div className="quiz">
          <Routes>
            <Route path="/" element={<Setting />} />
            <Route path="/quiz-game" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
