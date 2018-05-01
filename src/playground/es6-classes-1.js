class Person{
	constructor(name = "Anonymous"){
		this.name = name || "testing";
	}
	getGreeting(){
		return `Hi I am ${this.name}`;
	}
}

class Student extends Person{
	constructor(name age, major){
		super(nme, age);
		this.major = major;
	}
}

const me = new Student("John", 31, "Computer Science");
console.log(me);

const other = new Student();
console.log(other);
