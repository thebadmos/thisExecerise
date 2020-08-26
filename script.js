//      PART 1
/*1.What is the value of the keyword this in the following example:
var data = this;
console.log(data); 

output:The this keyword refers to an object(window)*/

/*2.What does this function output? Why?
function logThis(){
    return this;
}

logThis(); 

Output: The function refers to the window's object*/

/*3.What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}
instructor.sayHi()

output: Hello! Tim
why: From one of the ways to figure out the keyword this, using the implicit binding. The function sayHi() has a parent object called instructor where the this keyword will refer to the parent object instructor. */

/*4.●	What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() 

output: Cat owner? undefined.
why: The this keyword is undefined because it wasn't referred to the
*/

/*5.var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() 

output: "Oakland"
*/

/*6. var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
instructor.info.data.logLocation()
*/

//PART 2
/*1. Fix the following code:
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}*/
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return `This person's name is ${this.fullName}`;
        }
    }
}
obj.person.sayHi.call(obj);

/*2.●	List two examples of "array-like-objects" that we have seen.

the result of getElementsByClassName
arguments
*/

/*3.Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2
*/
function sumEvenArguments() {
    let arr = [].slice.call(arguments);
    let sum = 0;
    for(let i = 0; i <= arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }

/*3.●	Write a function called arrayFrom which converts an array-like-object into an array.
function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}
*/

/*4.Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"
function add(a,b){
    return a+b
}
var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"
*/
function invokeMax(fn, maxAmount) {
    let count = 0;
    return function () {
        let innerFn = [].slice.call(arguments);
        if (count >= maxAmount) {
            return "Maxed Out";
        } else {
            return fn.apply(this, arguments);
            count++;
            
        }
    }
}
function add(a, b) {
    return a + b
}
var addOnlyThreeTimes = invokeMax(add,3);


/*5.Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
game(1) // "You're too low!" 
game(8) // "You're too high!"
game(5) // "You're too low!"
game(7) // "You got it!" 
game(1) // "You are all done playing!" 

*/

function guessingGame(amount) {
    var result = Math.floor(Math.random() * 10);
    var guesses = 0;
    return function(guess) {
      guesses++;
      if (guesses > amount) {
        return "You are all done playing!";
      } else if (result < guess) {
        return "You're too high!";
      } else if (result > guess) {
        return "You're too low!";
      } else if (result === guess) {
        return "You got it!";
      }
    }
  }
  var game = guessingGame(5)