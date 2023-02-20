import React from "react";
import { Answer } from "../styles";

const Message = ({ message, index }) => {
  const time = `${index}.0`;
  //   const farFrom =
  //     Number(message.far_from) < 1
  //       ? `${message.far_from}km`
  //       : `${message.far_from} meters`;
  return (
    <div key={message.restaurant_name} className="answer-container">
      <Answer time={time}>
        {message.text}
        <div className="information-message">
          <span className="restaurant-name">{message.restaurant_name}</span>
          {` - ${message.far_from} from you - ${message.location}`}
        </div>
      </Answer>
    </div>
  );
};

export default Message;
