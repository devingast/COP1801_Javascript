for (let count = 0; count <= 10; count++) { // THis is a loop that will essentially count from 0-10

  if (count % 2 === 0) { // This will check if the current number in the loop is even or odd
    document.write("Count " + count + " is even<br>"); // display that the count is even, line break
  } else { // UNLESS IF
    document.write("Count " + count + " is odd<br>"); // if odd, display that the number is odd
  }
} // conditions and loop

let myNum = prompt(" Please enter a number between 5 and 20:"); // ask the user for a number between 5 - 20 and store it.

let counter = 1; // We are using a Do While loop here so the loop counters will equal the variable myNum
do {
  document.write("Loop counter: " + counter + "<br>"); // Kind of self explanitory
  counter++;
} while (counter <= myNum); // do the loop counter until counter is equal to the number stored in myNum

let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"]; // setting up an array for the subjects

subjects.forEach(function(subject) { // We are displaying the array values in order using foreach()
  document.write("Subject: " + subject + "<br>"); // displaying everything
});

document.write("Subjects: " + subjects.join(", ")); //diisplay the array values separated by commas!
