
const removeFromArray = function(testArray, ...removeElem) {
   for (let i = 0; i < removeElem.length; i++){
    if(testArray.includes(removeElem[i])){
        let index = testArray.indexOf(removeElem[i]);
        testArray.splice(index, 1);
    }
   }     
   return testArray;                 
};

// Do not edit below this line
module.exports = removeFromArray;
