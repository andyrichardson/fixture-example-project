import React, { FC } from "react";
import { render } from "react-dom";
import { Provider as UrqlProvider, createClient } from "urql";
import { Theme, GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { schema, executeExchange } from "./graphql";

const urqlClient = createClient({
  url: "/",
  exchanges: [
    executeExchange({
      schema
    })
  ]
});

const AppProviders: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <UrqlProvider value={urqlClient}>{children}</UrqlProvider>
    </ThemeProvider>
  </>
);

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("app")
);
