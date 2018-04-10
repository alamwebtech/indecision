console.log("app.js is runnig");

// JSX = Javascript XML

var template = (
	<div>
	<h1> Inside Appliation</h1>
    <p> This is some text from the APPLICATION</p>
	
	<ol>
	<li>Item One</li>
	<li>Item Two</li>
	</ol>
	<ul>
	<li>Number One</li>
	<li>Number Two</li>
	</ul>
	
	</div>);
	
	var myTemplate = (
	<div>
	<h2>Creating My Own Template</h2>
	<p>I am at 30</p>
	<p>I live in Delaware</p>
	</div>

);
	

var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);