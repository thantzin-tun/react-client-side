import React from "react";
import "./App.css";
import { RouteCom } from "./router/router";
import { GlobalStyle } from "./theme";
// import { HeaderCom, FooterCom } from "./components";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import { BrowserRouter } from "react-router-dom";

// import { Login } from "screen/login/login";

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <HeaderCom /> */}
          <RouteCom />
          {/* <FooterCom /> */}
          {/* <Login /> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
