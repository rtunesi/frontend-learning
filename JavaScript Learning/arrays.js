var list = ["Reece", "Jack", "Mat", "Richard", "Charlie"];

var name = prompt("What is your name?");

if (list.includes(name)){
    console.log("This person is allowed into the party")
}
else{
    console.log("This person isn't allowed into the party")
}