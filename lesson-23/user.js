const userWrapper = document.getElementById("user")
let userId = +window.location.hash.replace("#", "")

fetchSingleUserData()
async function fetchSingleUserData() {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
    const result = await response.json()
    renderSingleUserData(result)
    console.log(result)
    // .then(response => response.json())
    // .then(result => console.log(result))
}


function renderSingleUserData({ name, email, role, avatar }) {
    const img = document.createElement("img")
    const h1 = document.createElement("h1")
    const h4 = document.createElement("h4")
    const p = document.createElement("p")

    h1.innerHTML = name;
    h4.innerHTML = email;
    p.innerHTML = role;
    img.src = avatar;
    img.className = "user-avatar"
    
    userWrapper.append(img, h1, h4, p)
}