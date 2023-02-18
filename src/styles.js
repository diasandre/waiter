import styled, { keyframes } from "styled-components";

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
  max-width: 95%;
  margin-right: 10px;
  min-height: 50px;
  border-radius: 20px;
  background: #b5a9ff;
  padding: 5px 10px;
  text-align: justify;
  animation: ${bounce} 0.5s
    ${(props) => (props.time ? `${props.time}s` : "0.5s")} both;
`;
