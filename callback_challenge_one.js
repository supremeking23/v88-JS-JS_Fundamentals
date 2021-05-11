function foreach(array, callback) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}

	return result;
}

let result = foreach([1, 2, 3, 4, 5], function (num) {
	return num * 2;
});

console.log(result); //this should log [2,4,6,8,10]

let result2 = foreach([1, 2, 3, "v88", "training"], function (val) {
	return typeof val === `number` ? 0 : val;
});

console.log(result2); //this should log [0,0,0,"v88","training"]

console.log("\n\n================FILTER============\n\n");

function filter(array, callback) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}

	return result;
}
let filter_result = filter([1, 2, 3, 4, 15], function (val) {
	return val < 10 ? val : undefined;
	// if (val < 10) {
	// 	return val;
	// }
}); //this filters each value in the array and only allows values that is less than 10

console.log(filter_result); //this should log [1,2,3,4]

let filter_result2 = filter([1, 2, 3, 4, 15], function (val) {
	return val < 3 ? val : undefined;
}); // /only allows values that is less than 3

console.log(filter_result2); //this should log [1,2]

console.log("\n\n================Rejects============\n\n");

function reject(array, callback) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}

	return result;
}

let reject_result = reject([1, 2, 3, 4, 15], function (val) {
	return val > 10 ? val : undefined;
	// if (val < 10) {
	// 	return val;
	// }
});

console.log(reject_result);

let reject_result2 = reject([1, 2, 3, 4, 15], function (val) {
	return val >= 3 ? val : undefined;
	// if (val < 10) {
	// 	return val;
	// }
});

console.log(reject_result2);
