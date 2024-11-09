// Array Methods & a little bit of string methods

// []. 

// push - adds to the end of an array
// unshift - add to the begining of an array
// pop - deletes (from the end)
// shift - deletes (from beginig)

// includes - returns true or false if it's there
// indexOf - returns a specific item's index in an array

// map
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

// laptops.map((laptop) => console.log(laptop.name))


// let arr = [2,4,6,8,10];
// arr.map(i => console.log(i**3))


// filter - is like for with if/else in it

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
// let result = laptops.filter(n => n.ram > 10)
// console.log(result)

// forEach - kind of like map but returns you the old array and "map" gives you a new array

// let arr = [1, 2, 3];
// let sum = 0;
// arr.forEach(n => sum += n)
// console.log(sum)


// sort - for sorting thing in the array from small to big or from big to small

// let arr = [2, 3, 4, 5, 6, 12];
// let sortedNumber = arr.sort((a, b) => a - b)
// console.log(sortedNumber)


// fill - to replace an item in the array 
// let names = ["Sanjar", "Kamoliddin", "Ikrom"];
// console.log(names.fill("YouTuber", 0, 1))

// every 
// some

// let arr = [1, 2, 3, 11];

// let result1 = arr.every(n => n > 10); // false because we have 11 ( which is not lower than 10 )
// let result2 = arr.some(n => n > 10); // true because we have at least one item in the array which is bigger than 10

// console.log(result1, result2)


// find - returns undefined if it can't find and returns the item it self not an index or whatever


// let arr = [1, 2, 3, 4, 5];
// let result = arr.find(i => i === 5)
// console.log(result)


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

// let result = laptops.find(laptop => laptop.ram == 16)
// console.log(result.name)


// reduce

// let arr = [1, 2, 3, 4];
// let reducedArr = arr.reduce((a, b) => a + b, 0) // dont add 0 when you do "*" or "/"
// console.log(reducedArr)


// let laptops = [
//     {
//         name: "Macbook Air",
//         year: 2020,
//         color: "Silver",
//         ram: 16,
//         price: 1000,
//     },
//     {
//         name: "Macbook Pro",
//         year: 2021,
//         color: "Gold",
//         ram: 8,
//         price: 1000,
//     }
// ]

// let sum = 0;
// let result = laptops.map((i) => sum += i.price)
// console.log(sum)

// with reduce
// let result = laptops.map((i) => i.price).reduce((a, b) => a + b, 0)
// console.log(result)


// findIndex- for objects & may be array
//indexOf - is for string and numbers (aka other stuff)

// let laptops = [
//     {
//         name: "Macbook Air",
//         year: 2020,
//         color: "Silver",
//         ram: 16,
//         price: 1000,
//     },
//     {
//         name: "Macbook Pro",
//         year: 2021,
//         color: "Gold",
//         ram: 8,
//         price: 1000,
//     }
// ]

// let result = laptops.findIndex(lap => lap.name == "Macbook Pro")
// console.log(result)
// find returns the item itself while findIndex of returns the index of an element you give



// slice vs splice
// slice - copy's the part from an array
// splice - cuts the specific part from an array 

// let arr = [1, 2, 3, 4, 5];

// let part = arr.slice(0, 3) // 3 gacha, yani 3 ni ozini olmaydi
// let part2 = arr.splice(0, 3, 1) // it can replace 

// // console.log(part, part2)
// console.log(arr)



