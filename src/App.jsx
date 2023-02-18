import { Paper } from "@mui/material";
import logo from "./logos/logo-1.png";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { Answer } from "./styles";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const WELCOME_QUESTIONS = [
  "Do you want restaurant recommendations?",
  "Would you like some restaurant suggestions?",
  "Are you interested in hearing about good places to eat?",
  "Can I offer you some recommendations for restaurants?",
  "Are you looking for some restaurant ideas?",
  "Do you need any tips for restaurants to try?",
];

const App = () => {
  const [answers, setAnswers] = useState([]);

  return (
    <div className="main">
      <div>
        <Paper variant="outlined" className="container">
          <header>
            <div className="chat-header">
              <img
                src={logo}
                className="logo"
                width="80"
                height="80"
                alt="logo"
              />
              <h1>Walter</h1>
            </div>
          </header>
          <div className="chat-container">
            <div className="question-container">
              <div className="question">
                {WELCOME_QUESTIONS[getRandomInt(WELCOME_QUESTIONS.length)]}
              </div>
            </div>
            {answers.map((answer, index) => {
              return (
                <div key={answer.restaurant_name} className="answer-container">
                  <Answer time={`${index}.0`}>{answer.text}</Answer>
                </div>
              );
            })}
          </div>
          <SearchBar setAnswers={setAnswers} />
        </Paper>
        <footer>
          <p className="credits">
            made with <span className="heart">♥</span> by{" "}
            <a href="https://github.com/diasandre">@diasandre</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
