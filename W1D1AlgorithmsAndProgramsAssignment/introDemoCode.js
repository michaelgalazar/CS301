"use strict";

/* eslint-disable */
// const number = 5;
// number = number + number;
// console.log(number);

function reverseMove(string, integer) {
    let inputString = string;
    let inputArray = [];
    inputArray = inputString.split("");

    for (let i = 0; i < integer; i++) {
        inputArray.unShift(inputArray.pop());
    }
    for (let j = 0; j < inputArray.length; j++) {
        for (let k = 0; k < inputArray[i].length; k++) {
            inputArray[i].reverse() = inputArray[i].split("");
            inputArray[i].join("");
        }
    }
    return inputArray.join(" ");
}

console.log(reverseMove("I am great", 3));