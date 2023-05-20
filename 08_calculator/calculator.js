const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(anArray) {
	const totalSum = anArray.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0
  );
  return totalSum;
};

const multiply = function(anArray) {
  const total = anArray.reduce((accumulator, currentValue) => 
    accumulator * currentValue, 1
  );
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a <= 1){
    return 1;
  }
	return factorial(a-1)*a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
