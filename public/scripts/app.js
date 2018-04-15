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

var add = 0;

var addOne = function addOne() {
	add = add + 5;
	increment();
};

var appTwo = document.getElementById("myApp");
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

var increment = function increment() {
	var templateTwo = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Add Five each time: ",
			add
		),
		React.createElement(
			"button",
			{ onClick: addOne },
			" +5 Each Time"
		)
	);

	ReactDOM.render(templateTwo, appTwo);
};

increment();
