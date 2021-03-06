"use strict";
exports.addends = addends;
/**
 * 
 * @param {Arrays} input is a number to be tested.
 * @return {undefined}
 */
function addends(input) {
    let sum = input[0] + input[input.length-1];
    return sum;
}
