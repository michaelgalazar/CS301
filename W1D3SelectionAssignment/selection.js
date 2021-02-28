
"use strict"
let prompt = require ("prompt-sync")();

/** Question 1) Program that helps a user choose the correct footwear for the day’s weather. */

let input = prompt("Enter the day's type of weather: ");
let weather = input.toLowerCase();

if(weather === 'hot'){
    console.log("It's better to wear sandals.");
}
else if(weather === "rain"){
    console.log("It's better to wear galoshes.");
}
else if(weather === "snow"){
    console.log("It's better to wear boots.");
}
else{
    console.log("You can wear sneakers."); 
}

/** Question 2)Program that reads from the keyboard a student's name and 
 *             number of completed credits and then outputs the student's name and label. */

let getName = prompt("Enter your name: ");
let name = getName.toUpperCase();
const completedCredits = prompt("How many credits you completed? ");

if(completedCredits > 0 && completedCredits < 30){
    console.log(name,", you are a Freshman student.");
}
if(completedCredits >= 30 && completedCredits < 60){
    console.log(name,", you are a Sophomore student.");
} 
if(completedCredits >= 60 && completedCredits < 90){
    console.log(name,", you are a Junior student.");
} 
if(completedCredits >= 90){
    console.log(name, ", you are a Senior student.");
}  


/** Question 3) Program that calculates down payment for a home loan. */

const costOfHouse = +prompt("Please enter the cost of the house you want to buy: ");

if(costOfHouse >= 0 && costOfHouse < 50000){
    console.log("Your down payment is ", costOfHouse*5/100);
}
else if(costOfHouse >= 50000 && costOfHouse < 100000){
    console.log("Your down payment is ", 1000 + (costOfHouse - 50000)*10/100);
}
if(costOfHouse >= 100000 && costOfHouse < 200000){
    console.log("Your down payment is ", 2000 + (costOfHouse - 100000)*15/100);
}
if(costOfHouse >= 200000){
    console.log("Your down payment is ", 5000 + (costOfHouse - 200000)*10/100);
}

/** Question 4) Program that determines how long a person may borrow a book from a University's Library. */

console.log("Enter you status in the University?");
let status = +prompt("If you are a student press '1', if you are a Faculty press '2' and for any other member press '3': ");

    for(let k=1; k < 3; ++k){
        if(status >= 1 && status <= 3){
            break;
        }else{
            status = +prompt("Enter valid number please; If you are a student press '1', if you are a Faculty press '2' and for any other member press '3':" );
        }
    }

if (status == 1){
    console.log("We are glad to have you as a Student in our University! ");
    let books = +prompt("How many books do you want to borrow from the library? ");

    for(let i=0; i < 3; i++){

        if(books < 0){
            books = +prompt("Please enter a valid number.");
        }
        if(books == 0){
            console.log("Good! you can use the library to read books.");
            break;
        }
        if(books == 1){
            console.log("You have six weeks to return the book.");
            break;
        }
        if(books == 2){
            console.log("At least ONE book should be returned within four week duration.");
            console.log("And you have to return both the books or the remaining book within six weeks.");
            break;
        }
        if(books == 3){
            console.log("You should return at least one book within two week duration.");
            console.log("Then, at least ONE book should be returned within two weeks duration.");
            console.log("Finally, you have to return all the remaining book within twelve weeks.");
            break;
        }
        if(books > 3){
            console.log("You should return ", (books - 3)," books after two weeks.");
            console.log("Then, at least ONE book should be returned within the next two weeks.");
            console.log("Finally, you have to return all the remaining books not later than six weeks.");
            break;
        }
    }
}
if (status == 2){
    console.log("We are glad to have you as a Faculty member in our University! ");
    let books = +prompt("How many books do you want to borrow from the library? ");

    for(let i=0; i < 3; i++){

        if(books < 0){
            books = +prompt("Please enter a valid number.");
        }
        if(books == 0){
            console.log("Good! you can use the library to read books.");
            break;
        }
        if(books == 1){
            console.log("You have twelve weeks to return the book.");
            break;
        }
        if(books == 2){
            console.log("At least ONE book should be returned within eight weeks duration.");
            console.log("And you have to return both the books or the remaining book within twelve weeks.");
            break;
        }
        if(books == 3){
            console.log("You should return at least one book within eight week duration.");
            console.log("Then, at least ONE book should be returned within the next two weeks duration.");
            console.log("Finally, you have to return all the remaining books within twelve weeks.");
            break;
        }
        if(books > 3){
            console.log("You should return at least ", (books - 3)," books within eight weeks.");
            console.log("Then, at least ONE book should be returned within the next two weeks.");
            console.log("Finally, you have to return the remaining books not later than twelve weeks.");
            break;
        }
    }
}
if (status == 3){
    console.log("We are glad to have you as a member of our University! ");
    let books = +prompt("How many books do you want to borrow from the library? ");

    for(let i=0; i < 3; i++){

        if(books < 0){
            books = +prompt("Please enter a valid number.");
        }
        if(books == 0){
            console.log("Good! you can use the library to read books.");
            break;
        }
        if(books == 1){
            console.log("You have four weeks to return the book.");
            break;
        }
        if(books == 2){
            console.log("At least ONE book should be returned within three week duration.");
            console.log("And you have to return both the books or the remaining book within four weeks.");
            break;
        }
        if(books == 3){
            console.log("You should return at least one book within two week duration.");
            console.log("Then, at least ONE book should be returned within three week duration.");
            console.log("Finally, all the remaining books should be returned within four weeks.");
            break;
        }
        if(books > 3){
            console.log("You should return ", (books - 3)," books after two weeks.");
            console.log("Then, at least ONE book should be returned within the next one weeks.");
            console.log("Finally, you have to return all the remaining books not later than four weeks.");
            break;
        }
    }
}

/** QUestion 5) Program that determines what time a child should go to bed. */

const age = +prompt("Enter your child's age: ");
let season = (prompt("Also enter the season: ")).toLowerCase();
if(age <= 5){
    if(season === "summer" || season === "fall" ){
        console.log("The bedtime for your child should be not later than 8:30PM.");
    }
    else if (season === "winter" || season === "spring"){
        console.log("The bedtime for your child should be not later than 8:00PM.");
    }
}
if(age >= 6 && age <= 12){
    if(season === "summer"){
        console.log("The bedtime for your child should be not later than 9:30PM.");
    }
    else if (season === "winter" || season === "spring" || season === "fall"){
        console.log("The bedtime for your child should be not later than 8:30PM.");
    }
}
if(age >= 13){
    if(season === "summer"){
        console.log("The bedtime for your child should be not later than 10:00PM.");
    }
    else if (season === "winter" || season === "spring" || season === "fall"){
        console.log("The bedtime for your child should be not later than 9:30PM.");
    }
}
