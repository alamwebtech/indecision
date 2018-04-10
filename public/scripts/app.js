"use strict";

console.log("app.js is runnig");

// JSX = Javascript XML

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " Inside App"
  ),
  React.createElement(
    "p",
    null,
    " This is some text from the APP"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
