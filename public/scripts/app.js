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

//	var userName = "MD ALAM";
//	var sentence = "Creating My Own Template";
//	var ag = 30;
//	var loc= "DE USA";

var user = {
	userName: "MD ALAM",
	sentence: "Creating my own Templates",
	ag: 30,
	loc: "Delaware"
};

var myTemplate = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.userName
	),
	React.createElement(
		"h2",
		null,
		user.sentence.toUpperCase()
	),
	React.createElement(
		"p",
		null,
		user.ag
	),
	React.createElement(
		"p",
		null,
		user.loc
	)
);

var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);
