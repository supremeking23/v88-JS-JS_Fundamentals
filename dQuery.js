console.log("ivan");

// function $query(array, callback) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		result.push(callback(array[i]));
// 	}

// 	return result;
// }

// function $query(tag) {
// 	return document.querySelector(tag);
// }

// function click() {
// 	// this.addEventListener("click", function (e) {
// 	// 	console.log("34");
// 	// });
// 	return this.addEventListener("click", function (e) {
// 		alert("sd");
// 	});
// }

var zappo = function (selector) {
	var el;
	var obj = {
		getEl(selector) {
			if (el) return el;
			return document.querySelector(selector);
		},
		addClass(className) {
			el.classList.add(className);
			return this;
		},
		removeClass(clasName) {
			el.classList.remove(clasName);
			return this;
		},
	};

	el = obj.getEl(selector);

	return obj;
};

var $query = function (selector) {
	let element;

	var object = {
		getElement: function () {
			if (element) {
				return element;
			} else {
				return document.querySelectorAll(selector);
			}
		},

		click: function (func) {
			for (let i = 0; i < element.length; i++) {
				element[i].addEventListener("click", function () {
					func();
				});
			}

			return this;
		},

		hide: function () {
			for (let i = 0; i < element.length; i++) {
				element[i].style.display = "none";
			}
			return this;
		},

		show: function () {
			for (let i = 0; i < element.length; i++) {
				element[i].style.display = "block";
			}
			return this;
		},
	};

	// var object = {
	// 	index: null,
	// 	getElement: function () {
	// 		if (element) {
	// 			return element;
	// 		} else {
	// 			return document.querySelector(selector);
	// 		}
	// 	},

	// 	click: function (func) {
	// 		element.addEventListener("click", function () {
	// 			func();
	// 			return this;
	// 		});
	// 	},

	// 	hide: function () {
	// 		element.style.display = "none";
	// 		return this;

	// 		console.log(this.index);
	// 	},
	// };

	element = object.getElement(selector);
	return object;
};

// https://medium.com/@jamischarles/how-to-chain-functions-in-javascript-6644d44793fd
