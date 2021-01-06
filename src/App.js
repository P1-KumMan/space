import React from "react";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App-header">
                    <Header />
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
};

export default App;
