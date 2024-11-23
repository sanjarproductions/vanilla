// (async () => {
//     const response = await fetch("https://emojihub.yurace.pro/api/all/category/smileys-and-people/");
//     const data = await response.json();
//     render(data)
//     // console.log(data)
// })()

// // IIFE Function but function expression
// // (function () {

// // }())

// function render(d) {
//     d.map((i) => {
//         // console.log(i)
//         const p = document.createElement("span");
//         p.innerHTML = i.htmlCode[0]
//         document.body.appendChild(p)
//     })

// }

getData()
async function getData() {
    const response = await fetch("https://api.escuelajs.co/api/v1/users")
    const result = await response.json()
    console.log(result)
    render(result)
}

function render(users) {
    users.map((i) => {
        let userId = document.createElement("th")
        let userName = document.createElement("th")
        let userEmail = document.createElement("th")
        const tr = document.createElement("tr")

        userId.innerHTML = `${i.id}`
        // userName.innerHTML = `<a href="./user.html/#${i.id}">${i.name}</a>`
        // userName.innerHTML = `<a href="./user.html?user-id=${i.id}">${i.name}</a>` // this method will inshallah always work
        userName.innerHTML = `<a href="./user.html#${i.id}">${i.name}</a>` // this method will inshallah always work
        userEmail.innerHTML = `${i.email}`
        tr.append(userId, userName, userEmail)
        tbody.appendChild(tr)
        
    })
    
}