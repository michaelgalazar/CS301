"use strict";

/* eslint-disable */

function countProperties(obj) {

    let sumOfProperties = 0;

    for( let key in obj){
        sumOfProperties++;
    }
    return sumOfProperties;
}


const object = {shape: "square", size: "small", length: "12m", color: "Brown"};

console.log(countProperties(object));