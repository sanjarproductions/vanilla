// recursion
// setTimeout
// setInterval
// Construstor Function
// object

// codewars (inshallah 10 problems)


// let h1 = document.querySelector("#text")

// // works as a loop
// setInterval(() => {
//     let hour = String(new Date().getHours()).padStart(2, "0")
//     let minute = String(new Date().getMinutes()).padStart(2, "0")
//     let second = String(new Date().getSeconds()).padStart(2, "0") // pad start works only with string, and helps us to add 0 so 01 and not 1

//     h1.innerHTML = `${hour}:${minute}:${second}`

// }, 1000)












// function prime(num) {
//     // if (num == 0) { return false }
//     // if (num == 1) { return true }

//     // for (i = 1; i < num; i++) {
//     //     if (num % i == 0) { return false }
//     //     else { return true }
//     // }

// }

// let result = prime(1)
// console.log(result)



// function calculate(x) {
//     // console.log(x.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,))
//     console.log(x.reduce((a, b) => a * b))
// }

// calculate([1, 2, 3, 4])


// function calculate(operation, value1, value2) {
//     let num1 = Number(value1);
//     let num2 = Number(value2);
//     switch (operation) {
//         case "+":
//             console.log(num1 + num2)
//             break;
//         case "-":
//             console.log(num1 - num2)
//             break;
//         case "*":
//             console.log(num1 * num2)
//             break;
//         case "/":
//             console.log(num1 / num2)
//             break;

//     }

//     // console.log(`${value1} ${operation} ${value2}`)
// }

// calculate("+", "1", "1")






// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


// function split(str){
//     let LowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     let string = str.toLowerCase().split("")
//     console.log(string[0])
//     //str.split("").map((i) => console.log(i))
// }

// split("The sunset sets at twelve o' clock.")


