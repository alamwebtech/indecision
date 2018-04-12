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
	age: 30,
	location: "Delaware"
};

function myLocation(location) {
	if (location) {
		return location;
	} else {
		return "Location Unknown";
	}
}

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
		"Age: ",
		user.age
	),
	React.createElement(
		"p",
		null,
		"Location: ",
		myLocation(user.location)
	)
);

var user1 = {
	name: "Mr. JOHN",
	profession: "Software Engineer",
	age: 32
};

function people(name, profession) {
	if (name) {
		return name;
	} else {
		return "Unknown Person";
	}
}

var myPeople = React.createElement(
	"div",
	null,
	React.createElement(
		"h3",
		null,
		"Welcome on board: ",
		people(user1.name)
	),
	React.createElement(
		"p",
		null,
		"Your profession is: ",
		user1.profession
	)
);

var peopleInfo = document.querySelector("#info");
var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myPeople, peopleInfo);
ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);
