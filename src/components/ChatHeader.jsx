import React from "react";
import { ChatHeaderContainer } from "../styles";
import logo1 from "../logos/logo-1.png";
import logo2 from "../logos/logo-2.png";
import logo3 from "../logos/logo-3.png";
import logo4 from "../logos/logo-4.png";
import logo5 from "../logos/logo-5.png";
import logo6 from "../logos/logo-6.png";
import logo7 from "../logos/logo-7.png";
import logo8 from "../logos/logo-8.png";
import logo9 from "../logos/logo-9.png";
import logo10 from "../logos/logo-10.png";
import logo11 from "../logos/logo-11.png";
import logo12 from "../logos/logo-12.png";
import logo13 from "../logos/logo-13.png";
import { getRandomInt } from "../utils/helpers";

export const LOGOS = [
  { image: logo1, headerColor: "#7cea9c", fontColor: "#000" },
  { image: logo2, headerColor: "#7cea9c", fontColor: "#000" },
  { image: logo3, headerColor: "#7cea9c", fontColor: "#000" },
  { image: logo4, headerColor: "#E85D75", fontColor: "#000" },
  { image: logo5, headerColor: "#5BC0BE", fontColor: "#000" },
  { image: logo6, headerColor: "#1D1A31", fontColor: "#fff" },
  { image: logo7, headerColor: "#7cea9c", fontColor: "#000" },
  { image: logo8, headerColor: "#1D1A31", fontColor: "#fff" },
  { image: logo9, headerColor: "#FDE74C", fontColor: "#000" },
  { image: logo10, headerColor: "#FDE74C", fontColor: "#000" },
  { image: logo11, headerColor: "#FDE74C", fontColor: "#000" },
  { image: logo12, headerColor: "#1D1A31", fontColor: "#fff" },
  { image: logo13, headerColor: "#FDE74C", fontColor: "#000" },
];

const logo = LOGOS[getRandomInt(LOGOS.length)];

const ChatHeader = () => {
  return (
    <header>
      <ChatHeaderContainer
        headerColor={logo.headerColor}
        fontColor={logo.fontColor}
      >
        <img src={logo.image} className="logo" alt="logo" />
        <h1>Walter</h1>
      </ChatHeaderContainer>
    </header>
  );
};

export default ChatHeader;
