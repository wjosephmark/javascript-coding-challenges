var isSquare = function(number){

    const sqrtNumber = Math.sqrt(number)

    var answer = false

    if(Number.isInteger(sqrtNumber)){
        answer = true
    }

    return answer
}

isSquare(25)