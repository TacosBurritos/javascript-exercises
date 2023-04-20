const convertToCelsius = function(fahrenheit) {
  let convCelsius = (fahrenheit - 32)*(5/9);
  convCelsius = Math.round(convCelsius * 10)/10;
  return convCelsius;
};

const convertToFahrenheit = function(celsius) {
  let convFahrenheit = celsius*(9/5) + 32;
  convFahrenheit = Math.round(convFahrenheit * 10)/10;
  return convFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
