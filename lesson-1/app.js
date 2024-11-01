var age = 18;
var name = "Sanjar";
// console.log("Mening yoshim " + age + " da")

// var => variable - global,older
// let - new,local

// Biggeste differense in real: "scope"

if(true){
   var a = 1;
   let a = 1;
}
console.log(a)

// Note: only in case of 5 + "5" JS will 55
// but if you 5 * "5" it will give you 25 (and all other operations as well)