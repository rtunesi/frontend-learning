var maxLength = 280;
var userInput = prompt("Please enter a tweet, you have 280 characters to use");

// Final output
var userLength = userInput.length;
var charLeft = maxLength - userLength;
alert("You used a total of " + userLength + " and have a total of " + charLeft + " characters remaining");