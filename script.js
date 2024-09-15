// This is a onstructor function that will create the dog objects
function Dog(name, breed, color, owner, show, mySound, canTalk) {
    this.name = name; // assigning the parameter to the coresponding object property
    this.breed = breed; // assigning the parameter to the coresponding object property
    this.color = color; //assigning the parameter to the coresponding object property
    this.owner = owner;  // assigning the parameter to the coresponding object property
    this.show = show;  // assigning the parameter to the coresponding object property
    this.mySound = mySound; // assigning the parameter to the coresponding object property
    this.canTalk = canTalk; // assigning the parameter to the coresponding object property
    this.myGreeting = function() { // This is a method that will display a greeting method with the corespoinding object that is chosen based on user input
        return `Hello there, my name is ${this.name}, and I am the well known ${this.breed} from the hit TV show ${this.show}. I am ${this.color} in color and my owner is ${this.owner}. When I speak, I say: "${this.mySound}". Can I talk? ${this.canTalk ? "I can talk!" : "I cannot talk."}`;
    };
}

// Creating instances of the Dog object from ficitonal charact5ers
const dog1 = new Dog("Brian", "Beagle", "White", "Peter Griffin", "Family Guy", "Hey, what's up?", true); // Brian Griffin instance
const dog2 = new Dog("Santa's Little Helper", "Greyhound", "Brown", "Bart Simpson", "The Simpsons", "Woof woof!", false); // Santa's Little Helper instance here

// Displaying each dog's properties using a for in loop
function displayDogProperties(dog) {
    let dogInfo = ""; // setting up an empty string variable to store the dogs info later
    for (let property in dog) { // this is looping through each propertie in the dog object, here
        if (typeof dog[property] !== "function") { // This is checking if the current property is not a function!!!!!
            dogInfo += `${property}: ${dog[property]}\n`; // this is addint the name toe the 'dogInfo' string variable from earlier
        }
    }
    return dogInfo; // returning the collected dog info, presented1
}


let userDogSelection = prompt("Select a dog by typing its name: Brian or Santa's Little Helper"); // We are prompting the user to choose between the two preselected dogs.

let selectedDog; // a quick varialbe to store the selected dog by the user
if (userDogSelection === "Brian") { // if the user chose Brian,
    selectedDog = dog1; // setting the variable to the dog1 object, or the Brian object instance info stuff
} else if (userDogSelection === "Santa's Little Helper") { // if user chose the santas helper option
    selectedDog = dog2; // set this variable to the santa helper stuff
} else { // uh oh
    alert("Error: The dog you selected doesn't exist."); // if it ins't the two preselected dogs, display this
}


if (selectedDog) { // This is checking to see if a valid input and dog object was selected.
    const dogInfo = displayDogProperties(selectedDog); //Gather the dogs properties, then store them in a variable
    alert(dogInfo); // Show dog properties in an alert
    document.getElementById("dogInfo").innerText = selectedDog.myGreeting(); // Display the info found in the popup in an HTML bit
}
