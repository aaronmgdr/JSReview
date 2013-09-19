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
// Create a puppy object:

// // With a property mood that points to a string 'hungry'
// // With a property feed that points to a function:
// // This function sets the puppy's mood to 'fed'
// // You must use this in your function

// var puppy = {
// 	mood: "hungry",
// 	is: function () {
// 		this.mood = "fed";
// 	}
// };

// console.log("Puppy should be hungry:", puppy.mood);
// puppy.is("fed");
// console.log("Puppy should be fed:", puppy.mood);


//Individual Exercise #7

// Write a function (not a constructor) createTrashCan that:

// Takes one parameter trashAmount
// Returns an object that:
// Has one property trash with the value trashAmount
// var can = createTrashCan(2);
// console.log('Trash can should have 2 trash:', can.trash);


// var createTrashCan = function (trashAmount) {
// 	return {
// 		trash: trashAmount,
// 	 }
// };

// var can = createTrashCan(2)

// console.log('Trash can should have 2 trash:', can.trash)

// Individual Exercise #8

// Write a function (not a constructor) createBattery that:

// Takes one parameter charge
// Returns an object that:
// Has a property energy with the value charge
// Has a property use that points to a function:
// Takes one parameter amount
// Deducts energy by that amount, unless amount is greater than energy
// Javascript has no unless keyword.

// var createBattery = function (charge) {
// 	return {
// 		energy: charge,
// 		use: function (amount) {
// 			this.energy >= amount ? this.energy -= amount : "C'est Impossible"
// 		}
// 	}
// };

// var battery = createBattery(3);
// console.log('Battery should have 3 energy:', battery.energy);

// battery.use(2);
// console.log('Battery should have 1 energy:', battery.energy);

// battery.use(5);
// console.log('Battery should have 1 energy:', battery.energy);

// Individual Exercise #9
// Create a Dog constructor that:

// Takes one parameter name
// Has a property name that points to a string
// Has a property hunger that points to the number 10
// Has a property feed that points to a function:
// Takes one parameter food
// If food is 'steak', deduct hunger by two
// If food is 'toy', deduct hunger by zero
// Else deduct hunger by one
// Do not allow hunger to go below zero
// If hunger is zero, alert a snooze string (ex: zZzzZz)

// var Dog = function (name) {
// 		return {
// 			name: name,
// 			hunger: 10,
// 			feed: function (food) {
// 				if (this.hunger == 0) {
// 					alert("zZzzZz");
// 				} //ends

// 				else 	
				
// 				{	
// 					if (food == 'steak' && this.hunger >= 2) {
// 						this.hunger -= 2
// 					} // ends if 
// 					else if (food == 'toy'){
// 						this.hunger == this.hunger
// 					} // ends else if
// 					else if {
// 						this.hunger -= 1 
// 					} 
// 					else if (this.hunger == 0) {
// 						alert("zZzzZz");
// 					}
// 					 // ends else statement
// 				} // ends else statement
// 			} //ends feed : function
// 		}
// }; // ends dog function


// var billy = new Dog('Billy');
// console.log("Billy should have 10 hunger points:", billy.hunger);

// billy.feed('steak');
// console.log("Billy should have 8 hunger points:", billy.hunger);

// billy.feed('toy');
// console.log("Billy should have 8 hunger points:", billy.hunger);

// billy.feed('bug');
// console.log("Billy should have 7 hunger points:", billy.hunger);

// billy.feed('steak');
// billy.feed('steak');
// billy.feed('steak');
// // You should see an alert after this next line
// billy.feed('steak');
// console.log("Billy should have 0 hunger points:", billy.hunger);


// Individual Exercise #10
// Fix the following code (3 minor errors) and complete result so that the code outputs "Surprise!"
// var house = {
//   room: {
//     emptyBox: {},
//     size: '50 sqft'
//   },
//   otherRoom: {
//     box: {
//       writtenNote: "Surprise!"
//     },
//     size: '35 sqft'
//   }
// };

// var result = house.otherRoom.box.writtenNote;
// console.log("You find a written note:", result);

// Individual Exercise #11
// Complete the missing lines so that the following code works:

// var calculator = {
// 	multiply: function (x,y) {
// 		return x * y;
// 	}
// };

// var result = calculator.multiply(3,7);
// console.log('3 time 7 is', result);


//################# Individual Exercise #12 ########################

//Complete the missing lines so that the following code works:

var createHorn = function () {
  var horn = {};
  ???
  return horn;
};

var myHorn = createHorn();
console.log('Horn should honk a honky sound:', myHorn.honk());


//################# Individual Exercise #14 ########################

Complete the following code so that the "parent" constructor is called:

var Building = function (name) {
  this.name = name;
};

var Campus = function (name) {
  Building.call(this, name);
};

var mks = new Campus('MakerSquare');
console.log('Campus should be named MakerSquare', mks.name);
