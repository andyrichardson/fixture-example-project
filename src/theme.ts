import { createGlobalStyle } from "styled-components";

// Theme inspired by IBMs carbon design language`
export const Theme = {
  red: "#fa4d56",
  blue: "#0f62fe",
  green: "#42be65",
  darkGrey: "#161616",
  grey: "#393939"
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    font-family: "Open Sans";
  }

  html, body, #root {
    margin: 0;
    height: 100%;
  }
`;
