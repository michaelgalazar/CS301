"use strict"
let prompt = require ("prompt-sync")();

/** Question 1) Convert a volume in quarts to litres  */
let volume = prompt("Enter a volume in quarts ");
console.log("The volume in litres is ", Math.round(volume*0.946353));

/** QUestion 2) Convert a distance in kilometers to miles */
let distance = prompt("Enter a distance in kilometers ");
console.log("The distance in kilometers is ", Math.round(distance*0.6213));

/** Question 3) Program that allows an employee to enter the total number of boxes
 *              and the number of boxes he will place in each stack */

let totalBoxes = prompt("Enter the number of boxes ");
let boxesInEachStack = prompt ("The number of boxes in each stack");
console.log("The total number of stacks are ", Math.ceil(totalBoxes/boxesInEachStack));


/** Question 4) Compute the mileage of a vehicle */
let beginningOdometer = prompt("Enter the beginning of the odometer reading ");
let endingOdometer = prompt("Enter the ending of the odometer reading ");
let gallonsOfGas = prompt("Enter the total gallons of gas used ");
console.log("The mileage in miles per gallon is ", (endingOdometer - beginningOdometer)/gallonsOfGas);


/** Question 5) program that asks for a person’s age and computes and outputs
 *              the slowest and fastest rates necessary to strengthen his heart */

 let age = parseInt(prompt("How old are you? "));
 console.log("The slowest and fastest heart-rate to strengthen your heart are ", (220-age)*65/100, " and ", (220-age)*85/100, " respectively.");