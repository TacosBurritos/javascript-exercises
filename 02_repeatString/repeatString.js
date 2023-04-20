const repeatString = function(phrase, times) {
    let tempPhrase = '';
    if(times < 0){
        return 'ERROR';
    }
    for(let i = 0; i < times; i++){
        tempPhrase += phrase;
    }
    return tempPhrase;
};

// Do not edit below this line
module.exports = repeatString;
