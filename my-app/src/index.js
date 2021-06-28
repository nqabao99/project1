import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/reset.css";
import HomePage from "./page/homePage.js";

ReactDOM.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
    document.getElementById("root")
);
