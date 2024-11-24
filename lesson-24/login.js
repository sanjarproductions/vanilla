const LoginForm = document.querySelector("#login-form")
const LoginEmail = document.querySelector("#login-email")
const LoginPassword = document.querySelector("#login-password")
const API = "https://api.escuelajs.co/api/v1/";

LoginForm.addEventListener("submit", logInUser)

function logInUser(e) {
    e.preventDefault()
    if (LoginPassword.value.trim().length >= 8) {
        axios.post(`${API}auth/login`, {
            email: LoginEmail.value,
            password: LoginPassword.value
        })
            .then(response => {
                console.log(response.data)
                if(response.data.access_token){
                    localStorage.setItem("auth-token", response.data.access_token);
                    window.location.replace("http://127.0.0.1:5500/lesson-24/pages/account.html")
                }
            }) //
    }
    else {
        alert("Something went wrong, please try again")
    }
}