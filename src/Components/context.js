import { createContext, useContext, useEffect, useState } from "react";

const url = "https://opentdb.com/api.php?amount=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const difficultOptions = [
    { value: "", text: "Any Difficult" },
    { value: "easy", text: "Easy" },
    { value: "medium", text: "Medium" },
    { value: "hard", text: "Hard" },
  ];
  const categoryOptions = [
    { value: "", text: "Any Category" },
    { value: 25, text: "Art" },
    { value: 23, text: "History" },
    { value: 21, text: "Sport" },
    { value: 18, text: "Computer Science" },
  ];
  const [numberOfQuestion, setNumberOfQuestion] = useState(5);
  const [difficult, setDifficult] = useState(difficultOptions[2].value);
  const [category, setCategory] = useState(categoryOptions[4].value);
  const [checkedModeI, setCheckedModeI] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [info, setInfo] = useState({
    type: category,
    difficulty: difficult,
    questionLength: 0,
  });
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(null);
  const [numOfTrueAnswers, setNumOfTrueAnswers] = useState(0);
  const [deepInfo, setDeepInfo] = useState({});
  const [isDone, setIsDone] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${url}${numberOfQuestion}${category ? "&category=" + category : ""}${
          difficult ? "&difficulty=" + difficult : ""
        }`
      );
      const data = await res.json();
      if (data.results) {
        setQuestionsList(data.results);
        let ruleCategory;
        if (category === "") {
          ruleCategory = "Any Category";
        } else if (category === "25") {
          ruleCategory = "Art";
        } else if (category === "23") {
          ruleCategory = "History";
        } else if (category === "21") {
          ruleCategory = "Sport";
        } else {
          ruleCategory = "Computer Science";
        }
        setInfo({
          category: ruleCategory,
          difficulty: difficult,
          questionLength: data.results.length,
        });
      }
    } catch (error) {
      console.log("no data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [startGame]);
  useEffect(() => {
    if (questionsList.length) {
      if (activeQuestion < questionsList.length) {
        const { correct_answer, incorrect_answers, question } =
          questionsList[activeQuestion];
        incorrect_answers.push(correct_answer);
        setDeepInfo({
          correctAnswer: correct_answer,
          answersArray: incorrect_answers.sort((a, b) => 0.5 - Math.random()),
          ques: question,
        });
        setTrueAnswers(correct_answer);
        console.log(correct_answer);
      } else {
        setActiveQuestion(0);
        setIsDone(true);
      }
    }
  }, [questionsList, activeQuestion]);

  return (
    <AppContext.Provider
      value={{
        isDone,

        setIsDone,
        setQuestionsList,
        numOfTrueAnswers,
        setActiveQuestion,
        activeQuestion,
        deepInfo,
        setTrueAnswers,
        info,
        loading,
        trueAnswers,
        setNumOfTrueAnswers,
        setLoading,
        numberOfQuestion,
        setNumberOfQuestion,
        difficult,
        setDifficult,
        checkedModeI,
        setCheckedModeI,
        setStartGame,
        startGame,
        difficultOptions,
        category,
        setCategory,
        categoryOptions,
        questionsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
