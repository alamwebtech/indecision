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
		app.options.length,
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
