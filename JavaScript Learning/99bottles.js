var counter = 99;

function beerBottles(){
    while (counter !== 0){
        console.log(counter + " bottles of beer on the wall, " + counter + " bottles of beer.")
        counter--;
        console.log("Take one down and pass it around, " + counter + " bottles of beer on the wall.")
    }
}

beerBottles()