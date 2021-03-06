"use strict";
let prompt = require("prompt-sync")();

let number = [30, 40, 50, 60, 70, 80, 90, 120];

console.log("The value of the middle element is equal to ", getMiddle(number));

function getMiddle(input){
    
    if(input.length % 2 !== 0){

        let middleIndex = Math.floor(input.length/2);

        let middleValue = input[middleIndex];
        return middleValue;
    }else{
        let nextIndex = input.length/2;
        let nextValue = input[nextIndex];
        let previousIndex = nextIndex - 1;
        let previousValue = input[previousIndex];
        return (previousValue + nextValue)/2;
    }
}
