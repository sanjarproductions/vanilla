// IIFE = immidiate invoke function expretion 
// (function(){
//     fetch("https://api.escuelajs.co/api/v1/products")
//     .then(response => response.json())
//     .then(data => render(data))
// }())

// function render(products){
//     const fragment = document.createDocumentFragment()
//     products.map((i) =>{
//         console.log(i)
//         const div = document.createElement("div")
//         // div.innerHTML = i.title;
//         div.innerHTML = `
//         <img src=${i.images?.[0]} />
//         <img src=${i.category.image} />
//             <p>${i.category.name}</p>
//             <p>${i.title}</p>
//         `
//         fragment.appendChild(div)
//     })
//     document.body.appendChild(fragment)
// }

//

const jokeWrapper = document.querySelector("#joke-wrapper")
const clickBtn = document.querySelector("#btn")

generateRandomJoke()
async function generateRandomJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const result = await response.json()
    render(result)
}

function render({setup, punchline}) {
    jokeWrapper.innerHTML = `
    <p>${setup}</p>
    <p>${punchline}</p>`
}

clickBtn.addEventListener("click", () => {
    generateRandomJoke()
})