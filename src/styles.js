import styled, { keyframes } from "styled-components";

export const ChatHeaderContainer = styled.div`
  display: flex;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.headerColor};
  border-radius: 4px 4px 0 0;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #cacaca;
`;

export const CreditsField = styled.p`
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 0;
  font-size: 0.95em;
`;

const bounce = keyframes`
    0% {
        transform: scale(0);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        transform: scale(1);
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        transform: scale(0.7);
        animation-timing-function: ease-in;
    }
    72% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
    81% {
        transform: scale(0.84);
        animation-timing-function: ease-in;
    }
    89% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
    95% {
        transform: scale(0.95);
        animation-timing-function: ease-in;
        }
    100% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
`;

export const Answer = styled.div`
  font-size: 0.85em;
  min-width: 50%;
  max-width: 90%;
  margin-left: 10px;
  min-height: 50px;
  border-radius: 20px;
  background: #b5a9ff;
  padding: 10px 15px;
  text-align: justify;
  animation: ${bounce} 0.5s
    ${(props) => (props.time ? `${props.time}s` : "0.5s")} both;
  font-weight: 300;
`;
