import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
	fontColor: "#303030",
	bgColor: "#DADADA",
};
export const darkTheme = {
	fontColor: "#DADADA",
	bgColor: "#303030",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
    all:unset;
  }
  * {
    box-sizing:border-box;
  }
  body {
    background-color: #FAFAFA;
    font-size:14px;
    font-family:'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
