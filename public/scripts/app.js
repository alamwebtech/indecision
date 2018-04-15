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
	place: ["NY", "PHIL", "WIL", "BOS"],
	printPlaceLived: function printPlaceLived() {
		var _this = this;

		this.place.forEach(function (city) {
			console.log(_this.name + " has lived in " + city);
		});
	}
};

user.printPlaceLived();
