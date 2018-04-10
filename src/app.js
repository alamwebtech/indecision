console.log("app.js is runnig");

// JSX = Javascript XML

var template = <div>
	<h1> Inside App</h1>
    <p> This is some text from the APP</p></div>;


var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);