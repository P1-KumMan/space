import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
            </Container>
        </ThemeProvider>
    );
};

export default App;
