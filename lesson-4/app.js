// array
// indexOf
// includes
// charAt
// while
// do while

// let students = ["Sanjar", "Manjar", "Hanjar", "Yana Sanjar", "Va yana Sanjar", "Davron", "behzod"]
// let numbers = [1, 2, 3, 4, 5, 6, 7]

// for (i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// for (i = 0; i < numbers.length; i++) {
//     if (i > 3) {
//         console.log(numbers[i])
//     }
// }


// let word = "I go to school";
// console.log(word.includes("I")) // returns true or false
// console.log(word.indexOf("I")) // returns the index, if it's "false" non existed then it will return -1 
// console.log(word.charAt(2)) // oposite of IndexOf, now you give the index and then it will return you a real value (string, number)

// Type Conversion

// let textToNUmber = prompt("Enter a string")
// we can use +prompt("Enter a string")
// Number(prompt("Enter a string"))
// parseInt(prompt("Enter a string"))
// parseFloat(prompt("Enter a string"))
// prompt("Enter a string") * 1; // yeah if you "*" a string to 1 it will return a real number 


// while example
let say = prompt("Enter your name")

while(say != "Alex"){
    say = prompt("Enter your name")
}
