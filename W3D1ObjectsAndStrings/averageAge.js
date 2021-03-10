"use strict";
/* eslint-disable */

function getAverage(obj1, obj2) {

    let averageAge = (obj1.age + obj2.age) / 2;
    return averageAge;
}

const user1 = {name: "abc", age: 20};
const user2 = {name: "xyz", age: 10};

console.log("The average age of ", user1.name, " and ", user2.name, " is equal to ",  getAverage(user1, user2));