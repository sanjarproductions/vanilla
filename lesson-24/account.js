// const userDataWrapper = document.querySelector("#user-data")
// console.log(userDataWrapper)

    (() => {
        if (localStorage.getItem("auth-token")) {
            axios("https://api.escuelajs.co/api/v1/auth/profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("auth-token")}`
                }
            })
                .then(response => console.log(response.data))
        }
        else {
            window.location.replace("http://127.0.0.1:5500/lesson-24/pages/signup.html")
        }

    })()