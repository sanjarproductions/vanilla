// DOM first lesson - Document Object Model

// const btn = document.querySelector("#click-btn")
// const title = document.querySelector("#h1")

// btn.addEventListener("click", () => {
//     title.style.color = "red"
// })

// btn.addEventListener("click", changeColor)

// function changeColor() {
//     title.style.color = "red"
// }


// _____________________


const wrapperToggle = document.querySelector("#wrapper");
const circle = document.querySelector("#circle");

console.log(wrapperToggle, circle)

wrapperToggle.addEventListener("click", () => {
    // 1-way
    // if (circle.style.transform === "translateX(50px)") {
    //     circle.style.transform = "translateX(0px)"
    // }
    // else {
    //     circle.style.transform = "translateX(50px)"
    // }
    
    // 2-way
    circle.classList.toggle("toggled")
})