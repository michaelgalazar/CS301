"use strict";
/* eslint-disable */

function enhancedIncludes(input, value){

    let arrayResult = [];

    for(let i = 0; i < input.length; i++){
        if(input.includes(value, i)){
            arrayResult[0] = true;
        }
    }
    if(!arrayResult[0]){
        arrayResult[0] = false;
    }
    
    arrayResult[1] = input.indexOf(value, 0);

    arrayResult[2] = input.lastIndexOf(value, input.length-1);

    return arrayResult;

}

const data = ["I", "am", "studying", "JavaScript", "this", "year", "and", "next", "year", "also."];
let checkValue = "year";

console.log(enhancedIncludes(data, checkValue));

