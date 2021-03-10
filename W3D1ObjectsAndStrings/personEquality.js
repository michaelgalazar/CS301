"use strict";

function isPersonEqual(obj1, obj2) {
    if(obj1.name === obj2.name && obj1.age == obj2.age) {
        return true;
    }else {
        return false;
    }
}

const person1 = {name: "Michael", age: 35};
const person2 = {name: "Luwam", age: 29};

if(isPersonEqual(person1, person2)) {
    console.log ("The two persons have same name and age.");
} else {
    console.log ("The two persons does not have  either same name or age.");
}