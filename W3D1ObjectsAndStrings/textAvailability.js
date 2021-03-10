"use strict";

/* eslint-disable */

function checkSpam(str) {
    
    for(let key in str) {
        if (str[key] === "lottery" || str[key] === "prize") {
            return true;
        }
    }

    return false;
}

const input = {powerBall: "lottery", megaMillion: "winner", megaBuck: "medal", DV: "visa"};

console.log(checkSpam(input));

// To check the existence of property in an object.
function checkProperty() {
    if("lottery" in str || "prize" in str ) {
        return true;
    }else {
        return false;
    }
}