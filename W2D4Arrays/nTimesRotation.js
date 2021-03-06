"use strict";
let prompt = require("prompt-sync")();

let number = [30, 40, 50, 60, 70, 80, 90, 120];

let n = number.length-1;

console.log("Rotating the array by ", n, " times ", rotateLeft(n, number));

function rotateLeft(j, input) {

    for (let i = 0; i < j; i++) {

        let firstElement = input.shift();
        input.push(firstElement);
    }
    return input;
}