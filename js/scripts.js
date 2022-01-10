function add(x, y)       { return x + y }
function divide(x, y)    { return x / y }
function intDivide(x, y) { return Math.floor(x / y) }
function subtract(x, y)  { return x - y }
function multiply(x, y)  { return x * y }
function modulo(x, y)    { return x % y }

function fToC(temp) {
	return (temp - 32) * (5/9)
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);

alert("Your number is: " + result);

// Uncomment to verify function values
/*
console.log("hello!");
console.log(add(5, 10)); // 15
console.log(divide(10, 4)); // 2.5
console.log(subtract(100, 25)); // 75
console.log(multiply(2, 80)); // 160
console.log(modulo(7, 3)); // 1
console.log(intDivide(7, 3)); // 2

console.log(fToC(33));
*/