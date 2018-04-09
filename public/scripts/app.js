"use strict";

console.log("app.js is runnig");

// JSX = Javascript XML

var template = React.createElement(
  "h1",
  null,
  " Inside App"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
