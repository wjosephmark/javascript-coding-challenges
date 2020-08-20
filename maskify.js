function maskify(cc) {

    const numberString = cc.toString()
    
    const numberLength = numberString.length
    
    const hiddenLength = numberLength-4

    const numberSlice = numberString.slice(hiddenLength, numberLength) 
    
    const newNumber = []

    const test = []

    var i = 0
    while( i < numberLength-4){
        newNumber.push("#")
        i += 1
    }

    newNumber.push(numberSlice)


    const numberJoined = newNumber.join('')

    return(
        numberJoined
    )

}

const cardNumber =  12156184341153138

maskify(cardNumber)