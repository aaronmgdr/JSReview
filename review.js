// var add = function (x,y) {
// 	return x + y
// };

// console.log("1 plus 2 is:", add(1, 2));
// console.log("11 plus 4 is:", add(11, 4));

// var person = {
//   name: "Bob",
//   jumpCount: 0,
  
//   jump: function () {
//     this.jumpCount += 1;
//   }
// };

// person.jump();
// person.jump();
// console.log(person.name + " should have jumped twice:" + person.jumpCount);

// INDIVIDUAL 3
// var game = {};
// game.wins = 0;

// game.incrementWins = function (amount) {
//   this.wins += amount;
// };

// game.incrementWins(2);
// console.log("Game wins should be 2:" + game.wins);

// game.incrementWins(7);
// console.log("Game wins should be 9:" + game.wins);

// Individual 4

// var whinyPerson = {
//   pokeCount: 0,
//   poke: function () {
//   	this.pokeCount += 1;
//   }
// };

// whinyPerson.poke();
// whinyPerson.poke();
// console.log("Poke count should be 2:", whinyPerson.pokeCount);

// whinyPerson.poke();
// console.log("Poke count should be 3:", whinyPerson.pokeCount);

// INDIVIDUAL 5

// var computer = {
//   active: false
// };


// computer.switchOn = function(){
// 	this.active = true
// };

// computer.switchOn();
// console.log("Computer should be active:", computer.active === true);

//INDIVIDUAL 6
Create a puppy object:

// With a property mood that points to a string 'hungry'
// With a property feed that points to a function:
// This function sets the puppy's mood to 'fed'
// You must use this in your function

var puppy = {
	mood: "hungry",
	feed: function () {
		this.mood = "fed";
	}
};

console.log("Puppy should be hungry:", puppy.mood);
puppy.feed();
console.log("Puppy should be fed:", puppy.mood);










