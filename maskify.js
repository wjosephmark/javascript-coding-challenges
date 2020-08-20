// function maskify(cc) {

//     if(4 < cc.length) {

//         console.log("shitfuck")


//         const numberString = cc.toString()
        
//         const numberLength = numberString.length
        
//         const hiddenLength = numberLength-4
    
//         const numberSlice = numberString.slice(hiddenLength, numberLength) 
        
//         const newNumber = []
    
//         const test = []
    
//         var i = 0
//         while( i < numberLength-4){
//             newNumber.push("#")
//             i += 1
//         }
    
//         newNumber.push(numberSlice)
    
    
//         const numberJoined = newNumber.join('')
    
//         return(
//             numberJoined
//         )
//     } else {
//         return(
//             cc
//         )
//     }


// }

const cardNumber =  1242


function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

maskify(cardNumber)



