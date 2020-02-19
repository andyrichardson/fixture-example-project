import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "./theme";
import { Main } from "./components";

const ThemeDecorator: FC = props => (
  <>
    <ThemeProvider {...props} theme={Theme} />
    <GlobalStyle />
  </>
);

const Decorator: FC = props => <ThemeDecorator {...props} />;

export default Decorator;
