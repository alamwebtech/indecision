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

var myTemplate = React.createElement(
	"div",
	null,
	React.createElement(
		"h2",
		null,
		"Creating My Own Template"
	),
	React.createElement(
		"p",
		null,
		"I am at 30"
	),
	React.createElement(
		"p",
		null,
		"I live in Delaware"
	)
);

var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);
