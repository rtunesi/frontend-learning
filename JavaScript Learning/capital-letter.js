var nameInput = prompt("What is your name?");
var beginningLetter = nameInput.slice(0, 1);
var capitalLetter = beginningLetter.toUpperCase();
var restOfName = nameInput.slice(1, 99);

alert("Hello, " + capitalLetter + restOfName)