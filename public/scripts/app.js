"use strict";

var squire = function squire(x) {
	return x * x;
};

console.log(squire(8));

var arrow = function arrow(x) {
	return x * x;
};

console.log(arrow(10));

var firstName = function firstName(fullName) {
	return fullName.split(" ")[0];
};

console.log(firstName("MD ALAM"));

var user = {
	name: "MD ALAM",
	cities: ["NY", "PHIL", "WIL", "BOS"],
	printPlaceLived: function printPlaceLived() {
		var cityName = this;
		this.cities.forEach(function (city) {
			console.log(cityName.name + " has lived in " + city);
		});
	}
};

user.printPlaceLived();
