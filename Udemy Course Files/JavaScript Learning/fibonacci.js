function fibonacci(n){
    var x = 0;
    var y = 1;
    var z = 0;
    for (count = 0; count < n; count++){

        z = x + y;
        console.log(z);
        x = y;
        y = z;
    }
}

function fibonacciGenerator(n){
    var output = [];
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0, 1];
    }
    else{
        output = [0, 1];
        for (var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output
}