// isNan(Nan)
// isArray() => array.isArray([1,2,3]) 
// localstorage practise
// 0.1 + 0.2 will give an error 
// Symbol
// render("modify")


// ___________________________________
// let user = {
//     username: "sanjar",
//     password: "12345",
// }

// let {password, ...rest} = user // rest operation
// console.log(rest)
// ___________________________________
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2] // spred operation
// console.log(arr3)
// ___________________________________


// custom error topic here
try {
    console.log("Hello")
    //Hi // this is gonna give an error
    if(true){
        throw new SyntaxError("Hello") // you can make your own custom errors this way, ha ha ha )
    }
}
catch (err) {
    console.log(err)
    //console.error(err) // if you want it red
}
// 
finally{ // will work anyway
    console.log("your code worked")
}