"use strict";
let prompt = require("prompt-sync")();

/**
 * Question 4) Write a function to compute HCF of two numbers.
 * @param {8} num1 
 * @param {20} num2 
 * @returns Highest Common Factor 
 */
let getHCF = function(num1, num2){

    let smaller = 0;
    let larger = 0;
    let hcf = 0;

    if(num1 <= num2){
        smaller = num1;
        larger = num2;
    }else{
        smaller = num2;
        larger = num1;
    }

    for (let i = 1; i <= smaller; i++) {
        if( smaller%i == 0 && larger%i == 0 ){
            hcf = i;
        }
    }
    return hcf;
};

console.log("The Highest Common Factor of 8 and 20 is ", getHCF(8, 20));

/**
 * Question 5) Write a function to find LCM of any two numbers using the HCF function
 *             from previous question.
 * NOTE: The product of two numbers is the product of their LCM and HCF. 
 */

let getLCM = function(num1, num2){
    
    let lcm = num1 * num2 / getHCF(num1, num2);

    return lcm;
};

console.log("The Least Common Multiple of 12 and 30 is ", getLCM(12, 30));

/**
 * Question 6) write a program that asks two numbers from the user 
 *             and displays HCF and LCM of the two numbers.
 */
 let getLcm = function(num1, num2){
    
    let lcm = num1 * num2 / getHCF(num1, num2);

    return lcm;
};

let n1 = +prompt("Enter the first number: ");
let n2 = +prompt("Enter the second number: ");

console.log("The Least Common Multiple of ", n1," and ",n2, " is ", getLcm(n1, n2));

/**
 * Question 7) Write a function compute, that takes three parameters. 
 *             First parameter is a call back function that does the actual operation, 
 *             second and third are the operands.
 */
// * Pass add logic as an ANONYMOUS function.

let compute = function(output, num1, num2){
    let result = output(num1, num2);
    console.log("The sum of ", num1, " and ", num2, " is ", result);
};

let add = function(n1, n2){
    return n1 + n2;
};

compute(add, 2, 3);

// * Pass add logic as an ARROW function.

let comput = (output, num1, num2) => { let result = output(num1, num2);
    
    console.log("The sum of ", num1, " and ", num2, " is ", result);}

let added = function(n1, n2){
    return n1 + n2;
};

comput(added, 2, 3);