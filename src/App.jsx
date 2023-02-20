import { Paper } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";
import ChatBody from "./components/ChatBody";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div className="main">
      <div>
        <Paper variant="outlined" className="container">
          <ChatHeader />
          <ChatBody messages={messages} />
          <SearchBar setAnswers={setMessages} />
        </Paper>
        <ChatFooter />
      </div>
    </div>
  );
};

export default App;
