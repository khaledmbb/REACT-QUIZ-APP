import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Setting = () => {
  const {
    numberOfQuestion,
    setNumberOfQuestion,
    difficult,
    setDifficult,

    checkedModeI,
    setCheckedModeI,
    setStartGame,
    setIsDone,
    difficultOptions,
    category,
    setCategory,
    categoryOptions,
  } = useGlobalContext();
  return (
    <div className="setting">
      <h3>Settings</h3>
      <div className="setting-box">
        <div className="category">
          <label htmlFor="category">Choose Your Category</label>
          <select
            id="category"
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          >
            {categoryOptions.map(({ value, text }, idx) => (
              <option key={idx} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <div className="difficult">
          <label htmlFor="difficult">Choose Your Difficult</label>
          <select
            id="difficult"
            value={difficult}
            onChange={({ target }) => setDifficult(target.value)}
          >
            {difficultOptions.map(({ value, text }, idx) => (
              <option key={idx} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <div className="question">
          <label htmlFor="question">Number Of Question</label>
          <input
            id="question"
            type="number"
            value={numberOfQuestion}
            max="50"
            min="3"
            onChange={({ target }) => setNumberOfQuestion(target.value)}
          />
        </div>
        <div className="dark-light-mode">
          <label htmlFor="switch">dark mode</label>
          <label className="switch" id="switch">
            <input
              type="checkbox"
              checked={checkedModeI}
              onChange={() => setCheckedModeI(!checkedModeI)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setStartGame(true);
          setIsDone(false);
        }}
      >
        <Link to="/quiz-game">Start Game</Link>
      </button>
    </div>
  );
};

export default Setting;
