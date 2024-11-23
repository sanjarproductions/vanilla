// IIFE = immidiate invoke function expretion 
// (function(){
//     fetch("https://api.escuelajs.co/api/v1/products")
//     .then(response => response.json())
//     .then(data => render(data))
// }())

// function render(products){
//     const fragment = document.createDocumentFragment()
//     products.map((i) =>{
//         console.log(i.category.image);
//     })
// }


(function () {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => response.json())
        .then((data) => render(data));
})();

function render(products) {
    const fragment = document.createDocumentFragment();
    products.map((i) => {
        console.log(i.category.image); // Log to check image URLs
        const img = document.createElement("img");
        img.src = i.category.image || "https://via.placeholder.com/150"; // Fallback image
        img.alt = i.title || "No title available"; // Add alt attribute
        fragment.appendChild(img);
    });
    document.body.appendChild(fragment);
}


//

// const jokeWrapper = document.querySelector("#joke-wrapper")
// const clickBtn = document.querySelector("#btn")

// generateRandomJoke()
// async function generateRandomJoke() {
//     const response = await fetch("https://official-joke-api.appspot.com/random_joke")
//     const result = await response.json()
//     render(result)
// }

// function render({setup, punchline}) {
//     jokeWrapper.innerHTML = `
//     <p>${setup}</p>
//     <p>${punchline}</p>`
// }

// clickBtn.addEventListener("click", () => {
//     generateRandomJoke()
// })