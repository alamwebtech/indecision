"use strict";

console.log("app.js is runnig");

// JSX = Javascript XML

var template = React.createElement(
			"div",
			null,
			React.createElement(
						"h1",
						null,
						" Inside Appliation"
			),
			React.createElement(
						"p",
						null,
						" This is some text from the APPLICATION"
			),
			React.createElement(
						"ol",
						null,
						React.createElement(
									"li",
									null,
									"Item One"
						),
						React.createElement(
									"li",
									null,
									"Item Two"
						)
			),
			React.createElement(
						"ul",
						null,
						React.createElement(
									"li",
									null,
									"Number One"
						),
						React.createElement(
									"li",
									null,
									"Number Two"
						)
			)
);

var myApp = document.querySelector(".app");

ReactDOM.render(template, myApp);
