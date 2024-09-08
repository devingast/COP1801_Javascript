// This line of code is Creating a literal object named myDog
const myDog = { // includes the variosu attributes assosociated with Scooby Doo
    name: "Scooby Doo",
    breed: "Great Dane",
    color: "Brown",
    owner: "Shaggy",
    show: "Scooby Doo",
    mySound: "Scooby Dooby Doo!"
}; //closing brackets from line 2

// Displaying the dog's properties in a popup messagfe to the user when they first visit the site. String concatenation
alert(`Ladies and Gentleman and everyone, meet the legendary ${myDog.name}! ${myDog.name} is a ${myDog.breed} from the classic tv show "${myDog.show}". He is ${myDog.color} in color and is owned by ${myDog.owner}, who is often rumored to be a god. When ${myDog.name} speaks, he often says: "${myDog.mySound}"`);

// PART 2
// PART 2
//PART 2
//PART 2

// Constructor function for creating dog objects
function Dog(name, breed, color, owner, show, mySound, canTalk) { // constructor function right here!!!
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.owner = owner;
    this.show = show;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.myGreeting = function() { // This is storing the message below. When called, it will display this string concatenation
        return `Hello there, my name is ${this.name}, and I am a beloved ${this.breed} from the classic hit tv show ${this.show}. I am ${this.color} in color and my owner is ${this.owner}. When I speak, one of the classic things I say is: ${this.mySound}. Can I talk? ${this.canTalk ? "Of course I can." : "No, I can't."}`;
    };
} // closing the bracket from line 20

// Creating an instance of the Dog object
const myDogConst = new Dog("Scooby Doo", "Great Dane", "Brown", "Shaggy", "Scooby Doo", "Scooby Dooby Doo!", true);

// Displaying the dog's greeting using the myGreeting method in a popup
alert(myDogConst.myGreeting()); // greeting function called, then it pulls in the info stored in myDogConst right above
