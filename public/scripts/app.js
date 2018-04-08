console.log("app.js is runnig");

// JSX = Javascript XML

//var template = <p> This is JSX from app !!</p>;

var template = React.createElement(
"h1",
{ id: "someid" },
"Something new"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);