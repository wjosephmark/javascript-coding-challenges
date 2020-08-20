function maskify(cc) {

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    const backwards = reverseString(cc)

    const lastFour = backwards.slice(0,4)

    const hiddenLength = cc.length-4

    console.log(lastFour)

    return 

}

const cardNumber =  "adfasdfasdfasdfasdfasdfasdf"

maskify(cardNumber)