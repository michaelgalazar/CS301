"use strict"
let prompt = require ("prompt-sync")();


/** Question 1) Write a JavaScript program to test weather user input is a prime number or not */

const number = prompt("Enter a number to check whether it is Prime or not ");
let i = 2;
while(i < number){
    if(number % i === 0){
        console.log(number, " is not Prime")
        break;
    }else if (i === number-1 ) {
        console.log(number, " is Prime")
        break;
    }
    i++;
}


/** Question 2) Calculate the factorial index of a given number */

const num = prompt("Enter a number to get it's Factorial ");
let fact = 1;
for(let i=num; i > 0; i--){
    fact = fact*i;
}
console.log("The Factorial of ", num, " is equal to ", fact);

/** Question 3) Program that gives the user three tries to guess the correct pin of the account */

const correctPin = 1234;
let tryPin = prompt("Enter your correct pin ");
let count = 1; 
while(true){
    if(tryPin == correctPin){
        console.log("Correct, welcomeback");
        break;
    }
    if(count == 3){
        console.log("Sorry, you have been locked out");
        break;
    }else{
        tryPin = prompt("Incorrect, try again ");
        count++;
    }

}


/** Question 4) Fibonacci series up to N terms */

const index = prompt("Enter the sequence to get it's Factorial ");
let fib = 0;
let previous = 0;
let next = 1;
for( let i=0; i < index; i++){
    previous = next;
    next = fib;
    fib = previous + next;
}

console.log("The fibanocci of ", index, " is ", fib);


 /** Question 5) Compute sum of all the digits in a given integer number */

let digits = prompt("Enter any digit of number ");
let sum = 0;
while(digits){
    sum = sum + digits%10;
    digits = Math.floor(digits/10);
}
console.log("The sum of the digits of is ", sum);


/** Question 6) JS code to print following patterns using nested loops */
/**1
 * 22
 * 333
 * 4444
 * 55555
 */
let output = '';
for( let i=1; i < 6; i++){
    for(let j=0; j < i; j++){
        output = output + i + ' ';
    }
    console.log(output);
    output = '';
}

/**1
 * 12
 * 123
 * 1234
 * 12345
 */

let outp = '';
for( let i=1; i <= 5; i++){
    for(let j=1; j <= i; j++){
        outp = outp + j + ' ';
    }
    console.log(outp);
    outp = '';
}

/**55555
 * 4444
 * 333
 * 22
 * 1
 */

let result = '';
for( let i=5; i >= 1; i--){
    for(let j=0; j < i; j++){
        result = result + i + ' ';
    }
    console.log(result);
    result = '';
}