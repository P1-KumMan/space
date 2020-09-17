import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./fonts/d-din/D-DIN-Bold.otf";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline>
            <App />
        </CssBaseline>
    </React.StrictMode>,
    document.getElementById("root")
);
