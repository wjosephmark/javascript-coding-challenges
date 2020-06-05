var isSquare = function(number){

    const sqrtNumber = Math.sqrt(number)

    var result = false

    if(Number.isInteger(sqrtNumber)){
        result = true
    }

    return result
}

isSquare(25)