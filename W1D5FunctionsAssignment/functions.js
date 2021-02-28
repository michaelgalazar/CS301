"use strict"
let prompt = require ("prompt-sync")();

/** Question 1) program that prompts user to input a number and calls the function 
 *              checkPrime to see if the entered number is a prime number or not. */

function checkPrime(number){
    let i = 2;
while(i < number){
    if(number % i === 0){
        return false;
        //console.log(number, " is not Prime")
        break;  
    }else if (i === number-1 ) {
        return true;
        //console.log(number, " is Prime")
        break;
    }
    i++;
}
}

let input = +prompt("Enter a number to check if it is prime or not: ");
let result = checkPrime(input);
if(result){
    console.log(input," is Prime.");
}else{
    console.log(input," is not Prime.");
}

/** Question 2) Volume of cylinder */

function areaOfCircle(radius){
let area = 22/7*Math.pow(radius, 2);
return area;
}

function volumeOfCylinder(area, height){
let volume = area*height;
return volume;
}

let inputRadius = +prompt("Enter the radius of the circle: ");
let inputHeight = +prompt("Enter the height of the cylinder: ");

let resultOfArea = areaOfCircle(inputRadius);
let resultOfVolume = volumeOfCylinder(resultOfArea, inputHeight);

console.log("The volume of the cylinder is equal to ", resultOfVolume);

/** Question 3) Program that calculates the total volume of a house, including the volume of the roof space.*/

function houseVolume(width, depth, height, sweep){

    let livingV = livingVolume(width, depth, height);
    let triangleA = triangleArea(width, sweep);
    let roofV = roofVolume(triangleA, depth);
    return (livingV + roofV);
}

function livingVolume(w, d, h){
    return (w*d*h);
}

function triangleArea(a, b){
    let s = (a+b+b)/2;
    return (Math.sqrt(s*(s-a)*(s-b)*(s-b)));
}

function roofVolume(area, depth){
    return (area*depth);
}

const width = +prompt("Enter the width of the building: ");
const depth = +prompt("Enter the depth: ");
const height = +prompt("Enter the height: ");
const sweep = +prompt("Enter the sweep: ");

let totalVolume = houseVolume(width, depth, height, sweep);

console.log("The total volume of the house is equal to: ", totalVolume);