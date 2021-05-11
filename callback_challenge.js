// problem 1.1
// function foreach(array, operation) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		result.push(operation(array[i]));
// 	}

// 	return result;
// }

// let result = foreach([1, 2, 3, 4, 5], function (num) {
// 	return num * 2;
// });
// console.log(result); //this should log [2,4,6,8,10]

// problem 1.2

// function foreach2(array, operation) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		result.push(operation(array[i]));
// 	}

// 	return result;
// }

// let result2 = foreach2([1, 2, 3, "v88", "training"], function (val) {
// 	if (typeof val === "number") {
// 		return 0;
// 	} else {
// 		return val;
// 	}
// });
// console.log(result2); //this should log [0,0,0,"v88","training"]
// //

function foreach3(array, operation) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(operation(array[i]));
	}

	return result;
}
let result3 = foreach3([1, 2, 3, "hello"], function (val) {
	return typeof val;
});
console.log(result3); //this should log ["number", "number", "number", "string"]
