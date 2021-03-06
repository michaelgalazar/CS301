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

let newArray = [];
let j = 0;
for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
        newArray[j] = inputArray[i];
        j++;
    }
}

console.log(newArray);

let sum = 0;
let value = 0;

for (let k = 0; k < newArray.length; k++) {

    value = newArray[k];

    while (value !== 0) {
        sum = sum + value % 10;
        value = Math.floor(value / 10);
    }
}
console.log(sum);


