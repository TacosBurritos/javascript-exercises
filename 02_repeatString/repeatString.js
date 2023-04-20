const repeatString = function(phrase, i) {
    i = Number(i);
    let tempPhrase = phrase;
    while (i < 0){
        phrase = tempPhrase + phrase;
        i--;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
