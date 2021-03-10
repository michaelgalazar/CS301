"use strict";
/* eslint-disable */

function titleCase(data) { 

    let newData = "";
    for ( let i = 0; i < data.length; i++ ) {
        if ( data.charAt(i) == " " ) {
            newData += " " + data.charAt(++i).toUpperCase();
        } else {
            newData += data.charAt(i);
        }
    }
    return newData;
}

const sentence = "I am learning JavaScript this year.";

console.log(titleCase(sentence));