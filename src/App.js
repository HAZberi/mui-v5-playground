import React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import CardList from "./components/CardList/CardList";
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <CardList />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
