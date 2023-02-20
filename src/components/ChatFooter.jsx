import React from "react";
import { CreditsField } from "../styles";

const ChatFooter = () => {
  return (
    <footer>
      <CreditsField>
        made with <span className="heart">♥ </span>
        <a href="https://github.com/diasandre">@diasandre</a>
      </CreditsField>
    </footer>
  );
};

export default ChatFooter;
