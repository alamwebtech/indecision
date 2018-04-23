class Person{
	constructor(name = "Anonymous"){
		this.name = name || "testing";
	}
	getGreeting(){
		return `Hi I am ${this.name}`;
	}
}

const me = new Person("John");
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
