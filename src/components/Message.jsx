import React from "react";
import { Answer } from "../styles";

const Message = ({ message, index }) => {
  const time = `${index}.0`;
  const farFrom =
    Number(message.far_from) < 5
      ? `${message.far_from}km`
      : `${message.far_from} meters`;
  return (
    <div key={message.name} className="answer-container">
      <Answer time={time}>
        {message.text}
        <div className="information-message">
          <span className="restaurant-name">{message.name}</span>
          {` - ${farFrom} from you - ${message.location}`}
        </div>
      </Answer>
    </div>
  );
};

export default Message;
