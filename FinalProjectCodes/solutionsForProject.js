"use strict";
/* eslint-disable */
/** Question 1) procupine_number */

function findPorcupineNumber(n) {
    let num = n;
    let c;

    for ( let i = num+1; i >= n; i++ ) {
        c = 0;
        for (let j = 1; j <= i; j++ ) {
            if ( i % j == 0 ) {
                c++;
            }
        }
        if( c == 2 ) {
            if( i % 10 == 9 ) {
                return i;
            }
        }
    }
}

console.log(findPorcupineNumber(139));

/** Question 2) two_sum */

function sumOfTwoValues (nums, target) {

    let indeces = [];

    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = i; j < nums.length; j++) {
            if ( nums[i] + nums[j] == target ) {
                  indeces[0] = i;
                  indeces[1] = j;
                  return indeces;
            }
        }
    }
}

const arr = [2, 3, 4];
const targetSum = 6;
console.log (sumOfTwoValues(arr, targetSum));

/** Questionn 3) most_frequent */

function mostFrequent (arrayInput) {

    let mfrequency = 1;
    let frequency = 0;
    item = 0;
    
    for ( let i = 0; i < arrayInput.length; i++) {
        for (let j = i; j < arrayInput.length; j++) {
            if ( arrayInput[i] == arrayInput[j]) {
                frequency++;
            }
            if(mfrequency < frequency ) {
                mfrequency = frequency;
                item = arrayInput[i];
            }
        }
        frequency = 0;
    }
}