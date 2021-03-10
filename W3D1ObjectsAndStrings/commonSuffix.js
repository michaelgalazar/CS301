"use strict";

/* eslint-disable */
function sufix(str1, str2) {
    
    if(str1.length == 0 || str2.length == 0 ) {
        return "";
    }

    let commonSuffixChar = "";
    let i = 1;

    while( (str1.length - i) !== 0 && (str2.length - i) !== 0 ) {
        if( str1[str1.length-i] == str2[str2.length-i] ) {
            commonSuffixChar += str1[str1.length-i];
        }
        i++;
    }

    return commonSuffixChar.split("").reverse().join("");

}


const string1 = "Swimming";
const string2 = "walking";

console.log(sufix(string1, string2));