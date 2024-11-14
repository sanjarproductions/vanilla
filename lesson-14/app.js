// node vs element

const th = document.querySelectorAll("td");
let arr = Array.from(th) // crazy , alhamdulillah I learned a new thing

arr.map((element, index) => {
    if (index % 2 == 0) {
        element.style.fontStyle = "italic"
        element.style.color = "grey"
    }
})

console.log(arr)

// offsetWidth
// const box = document.querySelector("#box")
// console.log(box.offsetWidth)