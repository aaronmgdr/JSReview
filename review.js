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


var game = {};
game.wins = 0;

game.incrementWins = function (amount) {
  this.wins += amount;
};

game.incrementWins(2);
console.log("Game wins should be 2:" + game.wins);

game.incrementWins(7);
console.log("Game wins should be 9:" + game.wins);

