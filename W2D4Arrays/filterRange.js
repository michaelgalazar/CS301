"use strict";

/**
 * 
 * @param {Array of Numbers} values 
 * @param {Lowest limit} a 
 * @param {Highest limit} b 
 * @returns 
 */

function filterRange(values, a, b){

    let resultArray = [];
    let k = 0;
    for(let i = 0; i < values.length; i++){
        if(values[i] >= a && values[i] <= b){
            resultArray[k] = values[i];
            k++;
        }
    }
    return resultArray;
}

let arr = [23, 45, 11, 78, 91, -23];

console.log(filterRange(arr, 22, 46));