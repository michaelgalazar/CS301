"use strict";
/* eslint-disable */
exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;

/** Write recursive functions to calculate the power of any base. */
function power(base, exp) {
    if( exp < 0) {
        base = 1 / base;
        exp = exp * -1;
    }
    if( exp == 0 ) {
        return 1;
    }
    return base * power(base, exp - 1);

}

/** Write recursive functions to count the digits of a given number. */

function countDigits(number) {
    if(number >= 0 && number < 10) {
        return 1;
    }
    if(number < 0 && number > -10) {
        return -1;
    }
    if(number < -10) {
        return -1 + countDigits(Math.floor(number/10));
    }
    return 1 + countDigits(Math.floor(number/10));
}

/** Write recursive functions to reverse a given string. */

function reverse(str) {
    if(str === "") {
        return "";
    }
    return reverse(str.substr(1)) + str.charAt(0);
}

