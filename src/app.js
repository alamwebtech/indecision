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
	name: "Mr. JOHN",
	profession: "Software Engineer",
	age: 32,
	option: ['Front End', 'Back end']
};

function people(name, profession){
	if(name){
		return <p>Name: {name}</p>;
	}else{
		return "Unknown Person"
	}
	
	
}


var myPeople = (
<div>
	<h3>Welcome on board: {user1.name?user1.name  : "You are unknown person and You are not welcome..!!"}</h3>
   <p>Your profession is: {user1.profession}</p>
	
	{(user1.age && user1.age >18) && <h4>Youa are at: {user1.age}</h4>}

{/* Using turnery operator */}

   <h2>{user1.option.length > 0 ? "Here is your options" : "You have no options"}</h2>
	
</div>

);
	
var peopleInfo = document.querySelector("#info")
var appRoot = document.getElementById("app");
var myRoot = document.querySelector(".myApp");


ReactDOM.render(myPeople, peopleInfo)
ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, myRoot);