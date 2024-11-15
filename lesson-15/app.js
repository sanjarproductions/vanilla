const inp = document.querySelector("#input")
const btn = document.querySelector("#click-btn");
const box = document.querySelector("#box")

btn.addEventListener("click", () => {

    if (inp.value.trim() !== "") {
        const p = document.createElement("p")
        // box.appendChild(p) // add to the end 
        box.prepend(p)
        p.innerHTML = inp.value
    }
})



// ___________________



// const wrapper = document.querySelector("#text-wrapper");
// const input = document.querySelector("#inp");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     const p = document.createElement("p")
//     wrapper.append(p) // using append you can add elements & anything elese, but with appendChild you dont
//     p.innerHTML = "salom"
//     p.style.color = input.value
// })


// _________________

// setAttribute
// getAttribute
// removeAttribute