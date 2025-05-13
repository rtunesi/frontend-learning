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