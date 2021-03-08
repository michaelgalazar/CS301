"use strict";

/* eslint-disable */

function transform (input){

    let output = input.reverse().join("_");

    return output;
}

const fox = ["Quick", "Brown", "Fox"];
console.log(transform(fox));