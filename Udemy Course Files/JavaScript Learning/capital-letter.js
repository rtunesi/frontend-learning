// 1. Get users name.
var nameInput = prompt("What is your name?");

// 2. Get the beginning letter of the name.
var beginningLetter = nameInput.slice(0, 1);

// 3. Capitalise the first letter of the name.
var capitalLetter = beginningLetter.toUpperCase();

// 4. Get the rest of the inputted name.
var restOfName = nameInput.slice(1, 99);

// 5. Convert the rest of the name to lower case.
var lowerName = restOfName.toLowerCase();

// 6. Display the converted name.
alert("Hello, " + capitalLetter + restOfName)