"use strict";
let prompt = require("prompt-sync")();

let number = [30, 40, 50, 60];

console.log("Left rotation by one ", rotateLeft(number));

function rotateLeft(input) {

    let firstElement = input[0];
    let newArray = [];

    for(let i = 1; i < input.length; i++){
        newArray[i-1] = input[i];
    }
    newArray[input.length-1] = firstElement;
    return newArray;
}
