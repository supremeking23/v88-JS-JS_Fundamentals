// 1
// var a = 10;
// function abc() {
// 	var a = 15;
// 	console.log("a is", a);
// }
// console.log("a really is", a);

// 2

// var a = 10;
// function abc() {
// 	var a = 15;
// 	console.log("a is", a);
// }
// abc();
// console.log("a really is", a);

// 3

// if (a == undefined) {
// 	console.log("a is declared but hasn't been set to a specific value yet");
// }

// 4

// if (a == undefined) {
// 	console.log("a is declared but hasn't been set to a specific value yet");
// }
// var a = 15;

// 5

// var a = 15;
// function abc(a) {
// 	return a + 10;
// }
// var final = abc(a);
// console.log("final is", final);

// 6

// var a = 15;
// function abc() {
// 	a = a + 10;
// }
// console.log("a is", a);

// 7

// var a = 15;
// function abc() {
// 	a = a + 10;
// }
// console.log("a is", a);
// abc();
// console.log("a is", a);

// 8

// var a = 15;
// function abc() {
// 	var a = a + 10;
// }
// console.log("a is", a);
// abc();
// console.log("a is", a);

// 9
var a = 15;
function abc(a) {
	a = a + 15;
}
console.log("a is", a);
abc();
console.log("a is", a);
