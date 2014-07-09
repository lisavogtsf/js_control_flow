// tempConvert.js
// ******************************
// The Temperature Converter
// ******************************

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
// first multiply by 180/100, then add 32

var celsius_temp = 30;
var fahrenheit_temp = celsius_temp * (180.0 / 100.0) + 32;
console.log(celsius_temp + " degrees C is " + fahrenheit_temp + " degrees F");