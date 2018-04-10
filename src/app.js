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
	
//	var userName = "MD ALAM";
//	var sentence = "Creating My Own Template";
//	var ag = 30;
//	var loc= "DE USA";
	
	var user = {
	    userName: "MD ALAM",
	sentence: "Creating my own Templates",
	ag : 30,
	loc: "Delaware"
	};
	
	var myTemplate = (
	<div>
	<h1>{user.userName}</h1>
	<h2>{user.sentence.toUpperCase()}</h2>
	<p>{user.ag}</p>
	<p>{user.loc}</p>
	</div>

);
	

var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);