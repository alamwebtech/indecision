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
	
	
	const myApp = document.querySelector(".app");
	
	ReactDOM.render(template, myApp);