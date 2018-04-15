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
	printPlaceLived: function() {
        this.place.forEach((city) => {
			console.log(this.name + " has lived in " + city); 
		});
									
	}
};

user.printPlaceLived();