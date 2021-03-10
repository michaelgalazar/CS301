"use strict";

let car = {};
 car = {make: "Toyota"};
 car = {make: "Toyota", model: "Camry"};
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

// Extra check to add a property.
car.make = "Lexus";
console.log(car);
