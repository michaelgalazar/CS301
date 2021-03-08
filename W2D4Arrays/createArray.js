"use strict";
let prompt = require("prompt-sync")();

let i = 0;
let inputArray = [];
let numberOfElements = +prompt("How many elements do you want to insert: ");
let input = +prompt("Enter a number: ");
inputArray[i] = input;

while (i < numberOfElements-1) {
    i++;
    //let j = 0;
    input = +prompt("Enter a the next number: ");
    //inputArray[j] = ",";
    inputArray[i] = input;
}
console.log(inputArray);

let filteredArray = [];
let j = 0;
for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
        filteredArray[j] = inputArray[i];
        j++;
    }
}

console.log(filteredArray);

let sumOfEveryDigits = 0;
let sumOfAllTheElements = 0;
let value = 0;

let sumOfDigitsArray = [];

for (let k = 0; k < filteredArray.length; k++) {

    value = filteredArray[k];
    sumOfEveryDigits = 0;

    while (value !== 0) {
        sumOfEveryDigits = sumOfEveryDigits + value % 10;
        value = Math.floor(value / 10);
    }
    sumOfAllTheElements += sumOfEveryDigits;
 //   sumOfDigitsArray += sumOfEveryDigits + ", ";
    sumOfDigitsArray[k] = sumOfEveryDigits;
}

//console.log("[",sumOfDigitsArray, "]");
console.log(sumOfDigitsArray);
console.log(sumOfAllTheElements);
