// You are going to write a function which will select a random name from a list of names. 
// The person selected will have to pay for everybody's food bill.

function whoIsPaying(names){
    var lengList = names.length;
    var number = Math.random();
    number = number * lengList;
    number = Math.floor(number);
    var randomPerson = names[number];
    return randomPerson
}

whoIsPaying(["Reece", "Jack", "Matt", "Mark", "Manny", "Katie"])