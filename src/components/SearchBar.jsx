import React, { useState } from "react";
import "../index.css";
import { createCompletion } from "../services/openAiService";
import { PROMPTS } from "../constants/prompts";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgress, IconButton } from "@mui/material";
import RequirementsSelector from "./RequirementsSelector";

const getPosition = () =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });

const buildPrompt = (value) => {
  return `${PROMPTS.INIT_PROMPT}${PROMPTS.CHEAP_AND_NEARBY} ${value}. ${PROMPTS.JSON_EXPLANATION}`;
};

const getLocation = async () => {
  if ("geolocation" in navigator) {
    return getPosition();
  } else {
    console.log("Not Available");
    return null;
  }
};

const SearchBar = ({ setAnswers }) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleClick = async () => {
    setLoading(true);
    const position = await getLocation();
    console.log(options);
    if (position != null) {
      const response = await createCompletion(
        buildPrompt(`${position.coords.latitude},${position.coords.longitude}`)
      );
      setAnswers(response);
      setLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <RequirementsSelector values={options} setValues={setOptions} />
      <IconButton variant="contained" color="primary" onClick={handleClick}>
        {!loading ? <SendIcon /> : <CircularProgress color="primary" />}
      </IconButton>
    </div>
  );
};

export default SearchBar;
