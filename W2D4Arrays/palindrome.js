"use strict";
/*eslint-disable*/

function checkPalindrome(input) {

    let newArrayOfPalindrome = [];
    let k = 0;

    for (let i = 0; i < input.length; i++) {
        
// If the given string of the array contains one word it is palindrome.
        if (input[i].length === 1) {

            newArrayOfPalindrome[k] = input[i];
            k++;

        } else if (checkStringForPalindrome(input[i])) {
            newArrayOfPalindrome[k] = input[i];
            k++;
        }
        
    }
    return newArrayOfPalindrome;
}

function checkStringForPalindrome(string){

    for (let j = 0; j < string.length / 2; j++) {
        if(string.charAt(j) !== string.charAt(string.length - 1 - j)){
            return false;
        }
    }
    return true;
}

const arrayOfStrings = ["civic", "result", "deified", "rotator", "school", "hannah", "level", "radar"];

console.log(checkPalindrome(arrayOfStrings));