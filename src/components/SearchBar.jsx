import React from "react";
import "../index.css";
import { createCompletion } from "../services/openAiService";
import { PROMPTS } from "../constants/prompts";
import { Button } from "@mui/material";

const getPosition = () =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });

const buildPrompt = (value) => {
  return `${PROMPTS.INIT_PROMPT}${PROMPTS.CHEAP_AND_NEARBY} ${value}. ${PROMPTS.JSON_EXPLANATION}`;
};

const SearchBar = ({ setAnswers }) => {
  const getLocation = async () => {
    if ("geolocation" in navigator) {
      return getPosition();
    } else {
      console.log("Not Available");
      return null;
    }
  };

  return (
    <div className="search-bar">
      <Button
        variant="contained"
        className="button"
        onClick={async () => {
          const position = await getLocation();
          if (position != null) {
            const response = await createCompletion(
              buildPrompt(
                `${position.coords.latitude},${position.coords.longitude}`
              )
            );
            setAnswers(response);
          }
        }}
      >
        restaurants nearby
      </Button>
    </div>
  );
};

export default SearchBar;
