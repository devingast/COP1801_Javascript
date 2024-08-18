// We are setting up this variable while making it be filled with the users input
let Fname = prompt("Please type your first name in:");

// Say hello to the person through another popup
alert("Hello, " + Fname + "!");

// We are creating a constant variable for the value of pi here
const piValue = 3.1415926;

// Creating a variable while putting its value as the users input
let myFavNum = prompt("What is your favorite number?");

// Calculate the area of a circle with users entered number and pi value.
let myArea = myFavNum * myFavNum * piValue;

// We are displaying the results below on the webapge and in the console.
document.write("Hello, " + Fname + "<br>");
document.write("Your favorite number is: " + myFavNum + "<br>");
document.write("If that was the radius of a circle, the circle's area would be: " + myArea);
console.log("Hello, " + Fname);
console.log("Your favourite number is: " + myFavNum);
console.log("If that was the radius of a circle, the circle's area would be: " + myArea);
