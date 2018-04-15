const squire = function(x){
	return x * x;
};

console.log(squire(8));

const arrow = (x)=> x * x;


console.log (arrow(10));


const firstName = (fullName) => fullName.split(" ")[0];

console.log(firstName("MD ALAM"));


const user = {
	name: "MD ALAM",
	place: ["NY", "PHIL", "WIL", "BOS"],
	printPlaceLived () {
        this.place.forEach((city) => {
			console.log(this.name + " has lived in " + city); 
		});
									
	}
};

user.printPlaceLived();

/*
Using map function 
*/

const multiplier = {
	numbers: [12, 23, 45, 56, 10],
	multiplyBy: 3,
	multiply(){
		return this.numbers.map((num) => num * this.multiplyBy);
	}
	
};

console.log(multiplier.multiply());