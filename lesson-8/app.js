// Topic object
// setInterval & setTimeout

// let hourLine = document.querySelector("#hour")
// let minLine = document.querySelector("#min")
// let secLine = document.querySelector("#sec")

// setInterval(() => {
//     let hours = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds();

//     console.log(hours, minutes, seconds)
//     secLine.style.transform = `rotate(${seconds * 6}deg)`;
//     minLine.style.transform = `rotate(${minutes * 6}deg)`;
//     hourLine.style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
// }, 1000); 

// not working very correct

// clearInterval() // stops 
// clearTimeout() // stops as well




// function fizBuzz(n) {
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log("Fiz Buzz")
//     }
//     else if (n % 3 == 0) {
//         console.log("Fiz")
//     }
//     else if (n % 5 == 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log("Enter a valid number")
//     }
// }



// function fizBuzz(n) { // the right way of doing it
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log("FizBuzz")
//     }

//     else {
//         if (n % 3 == 0) {
//             console.log("Buzz")
//         }
//         else if (n % 5 == 0) {
//             console.log("Fiz")
//         }
//     }
// }

// fizBuzz(3)






// let laptops = [
//     {
//         name: "Macbook Air",
//         year: 2020,
//         color: "Silver",
//         ram: 16
//     },
//     {
//         name: "Macbook Pro",
//         year: 2021,
//         color: "Gold",
//         ram: 8
//     }
// ]
// console.log(laptops[0].year)

// let getTheLastLaptop = laptops.length - 1;
// console.log(laptops[getTheLastLaptop].year)

// let sum = 0;
// for (i = 0; i < laptops.length; i++) {
//     sum += laptops[i].ram
// }

// console.log(sum);






let arr = [
    {
        name: "Elon Musk",
        cars: ["McLaren", "Audi", "Tesla"]
    },
    {
        name: "Jeff Bezos",
        cars: ["Car", "Car",]
    },
    {
        name: "Bill Gates",
        cars: ["Car", "Car",]
    },
]

for (i = 0; i < arr.length; i++) {
    if (arr[i].cars.length > 2) {
        // console.log(arr[i])
        for (x = 0; x < arr[i].cars.length; x++) {
            console.log(arr[i].cars[x])
        }
    }
}