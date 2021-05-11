// var obj = {
// 	name: "Michael",
// 	age: 39,
// 	hello: function () {
// 		console.log("Michael says hello!");
// 	},
// };
// obj.hello(); // this executes the function inside the hello property and logs 'Michael says hello!'

// //A callback function could reference its own property by using a special keyword called 'this'.  For example,

// obj.celebrate_birthday = function () {
// 	this.age++;
// 	console.log(this.name + " is now " + this.age + " years old");
// };

// obj.celebrate_birthday();
// obj.celebrate_birthday();

var ninja1 = {
	hp: 100,
	strength: 15,
	attack: function () {
		//your code
		return Math.floor(Math.random() * this.strength);
	},
};
var ninja2 = {
	hp: 150,
	strength: 10,
	attack: function () {
		//your code
		return Math.floor(Math.random() * this.strength);
	},
};

for (let i = 1; i <= 10; i++) {
	console.log(`===Round ${i}===`);

	let ninja2_attack_points = ninja2.attack();
	let ninja1_attack_points = ninja1.attack();

	ninja2.hp = ninja2.hp - ninja1_attack_points;
	console.log(`Ninja 1 attacks Ninja2 and does a damage of ${ninja1_attack_points}! Ninja1 health: ${ninja1.hp}, Ninja2 health: ${ninja2.hp}`);

	ninja1.hp = ninja1.hp - ninja2_attack_points;
	console.log(`Ninja 2 attacks Ninja1 and does a damage of ${ninja2_attack_points}! Ninja1 health: ${ninja1.hp}, Ninja2 health: ${ninja2.hp}`);
}
