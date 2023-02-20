import React from "react";
import { WELCOME_QUESTIONS } from "../constants/constants";
import { getRandomInt } from "../utils/helpers";
import Message from "./Message";

const ChatBody = ({ messages }) => {
  return (
    <div className="chat-container">
      <div className="message-container">
        <div className="question">
          {WELCOME_QUESTIONS[getRandomInt(WELCOME_QUESTIONS.length)]}
        </div>
      </div>
      {messages.map((msg, index) => {
        return <Message message={msg} index={index} />;
      })}
    </div>
  );
};

export default ChatBody;
