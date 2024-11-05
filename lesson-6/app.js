// Types of functions


// Function decloration

// greet() // only in function decloration and 
// example for hoisting as well

// function greet() {

// }
// greet()


// function expression

// const calculate = function () {
//     // your awesome code here
// }
// calculate()


// arrow function

// () => {
//     // your awesome code here
// }

// const hello = () => { // you can do it this way as well
//     // your awesome code here
// }


// Constructor function


// IIFE




// Scope

// global scope (when the varialbe is created like this)
// let test1 = 10;
// var test2 = 20;
// const test3 = 30;


// local scope or block scope
// if (true) {
//     let test1 = 10;
//     var test2 = 20; // var can go out only in if() but nothing else
// }

//console.log(test1, test2) // test1 will give an error 


// fun fact
let test1 = 10;

if (true) {
    test1 = 33;
}

function expression() {
    test1 = 44;
}
expression()

console.log(test1) // the result will be 33


// 