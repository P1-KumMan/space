import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Box } from "@material-ui/core";

const App = () => {
    return (
        <Box style={{ backgroundColor: "white", margin: 0, padding: 0 }}>
            <Header style={{ margin: 0 }} />
        </Box>
    );
};

export default App;
