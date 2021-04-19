import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className="bg-gray-200 dark:bg-gray-900 w-full flex justify-center items-center font-sans">
    <Quiz />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
