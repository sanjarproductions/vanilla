const form = document.querySelector("#signup-form");
const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const userpassword = document.querySelector("#userpassword");
const useravatar = document.querySelector("#useravatar");

const API = "https://api.escuelajs.co/api/v1/";

form.addEventListener("submit", signUpUser);

function signUpUser(e) {
    e.preventDefault()
    if (username.value.trim().length >= 5 && userpassword.value.trim().length >= 8) {
        // fetch(`${API}users/`,{
        //     method:"POST"
        // })

        axios.post(`${API}users/`, {
            name: username.value,
            email: useremail.value,
            password: userpassword.value,
            avatar: useravatar.value,
        })
            .then(response => {
                console.log(response.data)
                if(response.data.id > 0){
                    window.location.replace("http://127.0.0.1:5500/lesson-24/pages/login.html")
                }
            })
    }
    else {
        alert("Something went wrong, please try again")
    }
}