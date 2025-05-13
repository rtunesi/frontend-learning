// if number is divisable by 3 > Fizz
// if number is divisable by 5 > buzz
// if number is divisable by 3 AND 5 > fizzbuzz

var output = [];
var count = 1;

function fizzBuzz(){
    if (count % 5 === 0 && count % 3 === 0){
        output.push("FizzBuzz")
    }
    else if (count % 5 === 0){
        output.push("Buzz")
    }
    else if (count % 3 === 0){
        output.push("Fizz")
    }
    else{
        output.push(count);
    }
    count++;
    console.log(output);
}

var i = 0;

while (i < 100){
    fizzBuzz()
    i++;
}