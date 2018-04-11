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
	age : 30,
	location: "Delaware"
	};
	
	
	function myLocation(location){
	if (location){
		return location;
	}else{
		return "Location Unknown"
	}
}
	
	var myTemplate = (
	<div>
	<h1>{user.userName}</h1>
	<h2>{user.sentence.toUpperCase()}</h2>
	<p>Age: {user.age}</p>
	<p>Location: { myLocation(user.location)}</p>
	</div>

);

var user1 = {
	name: "JOHN",
	profession: "Software Engineer",
	age: 32
};

function people(name, profession){
	if(name){
		return name;
	}else{
		return "Unknown Person"
	}
}

var myPeople = (
<div>
	<h3>Welcome on board: {people(user1.name)}</h3>
   <p>Your profession is: {user1.profession}</p>
	
	
</div>


);
	
var peopleInfo = document.querySelector("#info")
var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");

ReactDOM.render(myPeople, peopleInfo)
ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);