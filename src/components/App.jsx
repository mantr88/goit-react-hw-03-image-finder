import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/Theme";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <Layout>
      <GlobalStyle />
        <Searchbar />
      </Layout>
    </ThemeProvider>
  );
  };
};
