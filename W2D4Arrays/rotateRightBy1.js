"use strict";
let prompt = require("prompt-sync")();

let number = [30, 40, 50, 60, 70, 80, 90, 120];

console.log("Right rotation by one ", rotateRight(number));

function rotateRight(input) {

    let lastElement = input[input.length-1];

    let newArray = [lastElement];

    for(let i = 1; i < input.length-1; i++){
        newArray[i] = input[i-1];
    }
    return newArray;
}