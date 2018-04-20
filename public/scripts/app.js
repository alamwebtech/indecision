"use strict";

console.log("app.js is runnig");

// JSX = Javascript XML

var app = {
	title: "Indecission App",
	subtitle: "Put Your life in the handle of a computer",
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

// Creating a remove button 

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	render();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};
var myApp = document.querySelector("#app");

var render = function render() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			app.title
		),
		app.subtitle && React.createElement(
			"p",
			null,
			app.subtitle
		),
		React.createElement(
			"p",
			null,
			app.options.length > 0 ? "Here are your Options" : "No Options"
		),
		React.createElement(
			"button",
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			"What Should I do"
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll },
			" Remove All"
		),
		React.createElement(
			"ol",
			null,
			app.options.map(function (option) {
				return React.createElement(
					"li",
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		)
	);

	ReactDOM.render(template, myApp);
};

render();
