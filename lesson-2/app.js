// the difference between null & underfined is that, null is ussullay for things you know are 100% required and will be there (for example sms code for registraction)
// undefined is more for thing like "bio" whihc might me therebut also not 100%


// arifmetik & assigment opperators (these are called)

// let age = 5;
// age += 1 // age = age + 1
// console.log(age)


// logic apperatorlar
// && - and
// || - or
// ! - reverse of anything


// if else sohrt version
// let age = 18
// age <= 18 ? console.log("You are 18 or odler than 18") : console.log("Not yet buddy")


// Mathematical operations

// let num = 4.1

// console.log(Math.floor(num)) // removes everytgin after "." 
// console.log(Math.ceil(num)) // founds number to the highest 
// console.log(Math.round(num)) // normal rounding in math
// console.log(Math.abs(num)) // turns negative (-1) number into positive (1)
// console.log(Math.trunc(num)) // kind of same with floor
// console.log(Math.random()) // gives you random number
// console.log(num.toFixed(0)) // saves as many numbers after "." which is in (0)

// Homewrok

let userName = prompt("Insert your name")
let userPassword = prompt("Insert your password")

if (userPassword.length < 8) {
    alert("Your password should be at least 8 characters")
}

document.write(`${userName}, ${userPassword}`)