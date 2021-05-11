// Level 1: Storing a function in a variable
// 1
// let c = function (name) {
// 	console.log("my name is", name);
// 	return name.length;
// };

// 2
// let c = function (name) {
// 	console.log("my name is", name);
// 	return name.length;
// };
// c(15);

// 3

// let c = function (name = "Michael") {
// 	console.log("my name is", name);
// 	return name.length;
// };
// console.log(c());

// 4
// let c = function (name = "Michael") {
// 	console.log("my name is", name);
// 	return name.length;
// };
// console.log(c("John"));

// Level 2: Passing a function to a function
// const sum = function (a, b) {
// 	return a + b;
// };
// function performOperation(num1, num2, operation) {
// 	let result = operation(num1, num2);
// 	console.log("result is", result);
// 	return result;
// }
// console.log("ahaahh", performOperation(3, 5, sum));

// simple version

function performOperation(num1, num2, operation) {
	let result = operation(num1, num2);
	console.log("result is", result);
	return result;
}
performOperation(3, 5, function (a, b) {
	return a + b;
});

// Level 3: Having a function return a function

// function abc(a, b) {
// 	return function () {
// 		console.log("hello");
// 		return a + b + 10;
// 	};
// }
// let result = abc(5, 10);
// console.log(result);

function abc(a, b) {
	return function () {
		console.log("hello");
		return a + b + 10;
	};
}
let result = abc(5, 10);
let z = result();
console.log(z);
