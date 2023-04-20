const reverseString = function(phrase) {
    let number = phrase.length - 1;
    let reverseWord = "";
    for(i = number; i >= 0; i--){
        reverseWord += phrase[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
