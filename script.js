function checkQuality(quality) { // this is a function that will check if the entered service quality value is valid.
  if (quality !== "great" && quality !== "ok" && quality !== "poor") { // If not acceptable answer,
    alert("Please enter 'great', 'ok', or 'poor'."); // display this error message asking the user to try again
    return false; //
  }
  return true; // if the value is valid, bool is true.
}

function checkAmount(amount) { // TLhis is to catch incorrect number amounts, error handling in a way. Limiting.
  if (amount < 5 || amount > 500) { // If the amount is not between these two numbers, then
    alert("Please enter an amount between $5 and $500."); // display this message
    return false; //
  }
  return true; // if value is valid, return bool as true
}

function calculateTip(amount, quality) { // quality variable and calculations.
  if (quality === "great") { // is service was great,
    return amount * 0.2; // leave a 20% tip
  } else if (quality === "ok") { // if service was only okay
    return amount * 0.15; // leave a 15% tip
  } else { // otherwise......
    return amount * 0.1; // leave a 10% tip
  }
}

// Get user inputs for the variables!
let amount = parseFloat(prompt("Please enter the bill total")); //user inputs the total amount for the meal
let quality = prompt("Was the service quality great, ok, or poor?"); // user enters the service quality

if (checkAmount(amount) && checkQuality(quality)) { // checking user inputs for amount and quality in this line
  let tip = calculateTip(amount, quality); // calculating the tip
  tip = tip.toFixed(2); // We are limiting the decimal points to just two points. 60.00, or 23.45.
  alert(`For a service of $${amount}, a ${quality} service quality suggests a tip of $${tip}.`); // display a popup for the tip.
} //ENDDDDD
